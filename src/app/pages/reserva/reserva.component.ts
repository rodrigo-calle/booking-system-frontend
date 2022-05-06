import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { Habitacion } from 'src/classes/Habitacion';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit {

  declare require: any;

  habitacionesServicio: Array<HabitacionJsonServicio> = [];
  habitaciones: Array<HabitacionAgrupadaJson> = [];
  habitacionesReservadas: Array<HabitacionAgrupadaJson> = [];
  habitacionesReservadasDesglosadas: Array<HabitacionAgrupadaJson> = [];
  resumenReserva: resumenReservaJson = {};
  registroReserva: registroReservaServicio = {};
  pagConfirmacion = false;
  pagCheckout = false;

  constructor(
    private readonly rs: HabitacionesService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  userForm = this.fb.group({
    loginusuario: ['', Validators.required],
    passwordusuario: ['', Validators.required],
    idperfil: [0, Validators.required],
    nombres: ['', Validators.required],
    apellidopaterno: ['', Validators.required],
    apellidomaterno: ['', Validators.required],
    documentoidentidad: ['', Validators.required]
  })

  _selectHabitacion(event: any, habitacionReservada: HabitacionAgrupadaJson): void {

    //traer la habitación si ya fué agregada
    const index = this.habitacionesReservadas.findIndex((object) => {
      return object.idtipo === habitacionReservada.idtipo;
    });

    if (index === -1) {//es un registro nuevo por tipo de habitacion
      habitacionReservada.disponibles = event.target.value;
      this._desglosar_Habitaciones(habitacionReservada);
    } else {
      if (event.target.value == 0) {
        this._deleteHabitacion(habitacionReservada);
      } else {
        this.habitacionesReservadas[index].disponibles = event.target.value;
      }
    }
  }

  _deleteHabitacion(habitacionEliminada: HabitacionAgrupadaJson, indiceObtenido?: number): void {

    for (let i = 0; i <= this.habitacionesReservadasDesglosadas.length; i++) {
      if (this.habitacionesReservadasDesglosadas.length > 0) {
        if (this.habitacionesReservadasDesglosadas[i].idtipo == habitacionEliminada.idtipo) {
          this.habitacionesReservadasDesglosadas.splice(i, 1);
          i = i - 1;
        }
      }
    }

    var index = 0;

    if (indiceObtenido !== undefined) {
      index = indiceObtenido;
    } else {
      index = this.habitacionesReservadas.findIndex((object) => {
        return object.idtipo === habitacionEliminada.idtipo;
      });
    }
    this.habitacionesReservadas.splice(index, 1);
  }

  _obtenerHabitaciones() {

    this.rs._getHabitaciones().subscribe((rest: any) => {
      this.habitacionesServicio = rest.data;
      console.log("this.habitacionesServicio debe estar lleno");
      this._agrupar_Habitaciones();
    })
  }

  _agrupar_Habitaciones() {
    if (this.habitacionesServicio[0] != null) {
      this.habitacionesServicio.forEach(item => {
        //Verificar si fue agregado ese tipo
        const index = this.habitaciones.findIndex((object) => {
          return object.idtipo === item.idtipo;
        });

        if (index === -1) {//es un registro nuevo por tipo de habitacion

          var habitacion = {} as HabitacionAgrupadaJson;
          habitacion.disponiblesArray = [];

          habitacion.idtipo = item.idtipo;
          habitacion.tiponombre = item.tiponombre;
          habitacion.personas = item.personas;
          habitacion.precio = item.precio;
          habitacion.image = item.image;
          habitacion.disponiblesArray!.push(0);
          habitacion.disponiblesArray!.push(1);
          this.habitaciones.push(habitacion);
        } else {
          this.habitaciones[index].disponiblesArray!.push(this.habitaciones[index].disponiblesArray!.length);
        }
      })
    }
  }

  _desglosar_Habitaciones(habitacionReservada: HabitacionAgrupadaJson) {

    this.habitacionesReservadas.push(habitacionReservada);

    for (let i = 0; i <= this.habitacionesServicio.length - 1; i++) {
      if (this.habitacionesServicio[i].idtipo == habitacionReservada.idtipo && this.habitacionesReservadasDesglosadas.length < habitacionReservada.disponibles!) {
        this.habitacionesReservadasDesglosadas.push(this.habitacionesServicio[i]);
        this._desglosar_personas_Habitacion(this.habitacionesReservadasDesglosadas[this.habitacionesReservadasDesglosadas.length - 1]);
      }
    }
  }

  _desglosar_personas_Habitacion(habitacionReservada: HabitacionAgrupadaJson) {

    habitacionReservada.personasArray = [];

    for (let i = 0; i <= habitacionReservada.personas!; i++) {
      habitacionReservada.personasArray.push(i);
    }
  }

  _anadirAdultos(event: any, habitacionDesglosada: HabitacionAgrupadaJson) {

    habitacionDesglosada.adultos = parseInt(event.target.value);
    if (this._verificarPersonas(habitacionDesglosada) == false) {
      alert("No es posible seleccionar mas huespedes que la capacidad de la habitación")
      event.target.value = 0;
      habitacionDesglosada.adultos = event.target.value;
    }
  }

  _anadirNinos(event: any, habitacionDesglosada: HabitacionAgrupadaJson) {

    habitacionDesglosada.ninos = parseInt(event.target.value);
    if (this._verificarPersonas(habitacionDesglosada) == false) {
      alert("No es posible seleccionar mas huespedes que la capacidad de la habitación")
      event.target.value = 0;
      habitacionDesglosada.ninos = event.target.value;
    }
  }

  _verificarPersonas(habitacionReservadaDesglosada: HabitacionAgrupadaJson) {

    var cantidadAdultos = habitacionReservadaDesglosada.adultos ? habitacionReservadaDesglosada.adultos.valueOf() : 0;
    var cantidadNinos = habitacionReservadaDesglosada.ninos ? habitacionReservadaDesglosada.ninos.valueOf() : 0;

    if ((cantidadAdultos + cantidadNinos) <= habitacionReservadaDesglosada.personas!) {
      this._actualizarResumenReserva();
      return true;
    } else {
      return false;
    }
  }

  _deshacer_seleccion() {

    for (let i = 0; i <= this.habitacionesReservadasDesglosadas.length - 1; i++) {
      this.habitacionesReservadasDesglosadas[i].adultos = 0;
      this.habitacionesReservadasDesglosadas[i].ninos = 0;
    }

    this.resumenReserva.totalAdultos = 0;
    this.resumenReserva.totalNinos = 0;
    this.pagConfirmacion = false;
    this.pagCheckout = false;
  }

  _confirmar_seleccion() {

    this.resumenReserva.totalHabitaciones = this.habitacionesReservadasDesglosadas.length;

    if (this.habitacionesReservadasDesglosadas.length > 0) {
      for (let i = 0; i <= this.habitacionesReservadasDesglosadas.length - 1; i++) {
        this.habitacionesReservadasDesglosadas[i].adultos = 0;
        this.habitacionesReservadasDesglosadas[i].ninos = 0;
      }

      this.pagConfirmacion = true;
      this.pagCheckout = false;
      this.resumenReserva.totalAdultos = 0;
      this.resumenReserva.totalNinos = 0;
    } else {
      alert("No hay ninguna habitación seleccionada");
    }
  }

  _actualizarResumenReserva() {

    var totalAdultos = 0;
    var totalNinos = 0;

    for (let i = 0; i <= this.habitacionesReservadasDesglosadas.length - 1; i++) {
      if (this.habitacionesReservadasDesglosadas[i].adultos?.valueOf() !== undefined) {
        totalAdultos = totalAdultos + this.habitacionesReservadasDesglosadas[i].adultos?.valueOf()!;
      }
      if (this.habitacionesReservadasDesglosadas[i].ninos?.valueOf() !== undefined) {
        totalNinos = totalNinos + this.habitacionesReservadasDesglosadas[i].ninos?.valueOf()!;
      }
    }
    this.resumenReserva.totalAdultos = totalAdultos;
    this.resumenReserva.totalNinos = totalNinos;
  }

  _confirmar_reserva() {

    this.resumenReserva.totalHabitaciones = this.habitacionesReservadasDesglosadas.length;
    if (this.habitacionesReservadasDesglosadas.length > 0) {
      if (this.resumenReserva.totalAdultos! == 0) {
        alert("Debe haber algún adulto en la reserva");
      } else {
        this.pagCheckout = true;
        this.pagConfirmacion = false;
      }
    } else {
      alert("No hay ninguna habitación seleccionada");
    }
  }

  _registrar_reserva(){

    //habitacionReservada.personasArray = [];
    this.registroReserva.idreserva = 1;
    this.registroReserva.data! = this.habitacionesReservadasDesglosadas;

    this.rs._insertReserva(this.registroReserva).subscribe((rest: any) => {
      if (rest.isSuccess) {
        alert("Su reserva se creo con el ID: " + rest.data.id);
        this.router.navigate(['contactus']);
      } else {
        alert("Error al crear la reserva"); 
      }
    })
  }

  ngOnInit(): void {
    this._obtenerHabitaciones();
  }
}

interface HabitacionAgrupadaJson {
  idtipo?: number
  tiponombre?: String
  precio?: String
  personas?: number
  disponibles?: number
  image?: String
  disponiblesArray?: number[]
  personasArray?: number[]
  adultos?: number
  ninos?: number
}

interface HabitacionJsonServicio {
  disponibles: number,
  idtipo: number,
  tiponombre: String,
  precio: String,
  personas: number,
  image: String,
}

interface resumenReservaJson {
  totalHabitaciones?: number
  totalAdultos?: number
  totalNinos?: number
}

interface registroReservaServicio {
  idreserva?: number
  data?: HabitacionAgrupadaJson[]
}





