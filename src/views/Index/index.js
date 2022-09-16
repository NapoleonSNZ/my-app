import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  Alert,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { gridAutoFlow } from "styled-system";

export default function Index({ navigation }){

  const afp = 0.10;
  const isss= 0.035;
  const renta= 0.0625;

  const inputStyle = {
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    borderRadius: 25,
    color: "white",
    marginBottom: 10,
    fontSize: 10,
  };

  return (
    <Formik
      initialValues={{
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        edad: "",
        correo: "",
        telefono: "",
        domicilio: "",
        sueldo: "",

      }}
      onSubmit={(values) => navigation.navigate("Info", {
        nombre1: values.nombre1,
        nombre2: values.nombre2,
        apellido1: values.apellido1,
        apellido2: values.apellido2,
        edad: values.edad,
        correo: values.correo,
        telefono: values.telefono,
        domicilio: values.domicilio,
        sueldo: values.sueldo,
        afp: afp * values.sueldo,
        isss: isss * values.sueldo,
        renta: renta * values.sueldo,
      })}
      validationSchema={yup.object().shape({
        nombre1: yup
          .string()
          .min(2, "Debe tener más caracteres")
          .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "Nombres no puede tener numeros"
          )
          .required("Por favor, Digite su nombre!"),
        nombre2: yup
          .string()
          .min(2, "Debe tener más caracteres")
          .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "Nombres no puede tener numeros"
          )
          .required("Por favor, Digite su nombre!"),
        apellido1: yup
          .string()
          .min(2, "Debe tener más caracteres")
          .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "apellidos no puede tener numeros"
          )
          .required("Por favor, Digite su apellido!"),
        apellido2: yup
          .string()
          .min(2, "Debe tener más caracteres")
          .matches(
            /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            "apellidos no puede tener numeros"
          )
          .required("Por favor, Digite su apellido!"),
        edad: yup
          .number()
          .typeError("Solo se acepta numeros")
          .integer("Tiene que ser entero")
          .min(18, "Debe ser mayor de edad")
          .max(100, "Debe ser menos de 100")
          .required("Por favor, Digite su edad!"),
        correo: yup
          .string()
          .email("Debe ser formato de correo")
          .required("Por favor, Digite su correo!"),
        telefono: yup
          .string()
          .matches(/\D*(\d{4})-\D*(\d{4})/, "Formato de numero invalido")
          .required("Por favor, Digite su telefono!"),
        domicilio: yup.string().required("Por favor, Digite su domicilio!"),
        sueldo: yup
          .number()
          .typeError("Solo se acepta numeros")
          .min(0, "Sueldo no puede ser negativo")
          .required("Por favor, Digite su sueldo!"),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.titulo}>DESCUENTOS DE EMPLEADOS</Text>
            <Text style={styles.titulo2}>Ingrese sus datos  </Text>

            <Text style={styles.label}>Primer Nombre:</Text>
            <TextInput
              value={values.nombre1}
              style={inputStyle}
              onChangeText={handleChange("nombre1")}
              onBlur={() => setFieldTouched("nombre")}
              placeholder="ej. Chepe Juan"
              placeholderTextColor="#797979"
            />
            {touched.nombre1 && errors.nombre1 && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.nombre1}
              </Text>
            )}
            <Text style={styles.label}>Segundo Nombre:</Text>
            <TextInput
              value={values.nombre2}
              style={inputStyle}
              onChangeText={handleChange("nombre2")}
              onBlur={() => setFieldTouched("nombre")}
              placeholder="ej. Chepe Juan"
              placeholderTextColor="#797979"
            />
            {touched.nombre2 && errors.nombre2 && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.nombre2}
              </Text>
            )}
            <Text style={styles.label}>Primer Apellido:</Text>
            <TextInput
              value={values.apellido1}
              style={inputStyle}
              onChangeText={handleChange("apellido1")}
              onBlur={() => setFieldTouched("apellido")}
              placeholder="ej.  Pérez Cruz"
              placeholderTextColor="#797979"
            />
            {touched.apellido1 && errors.apellido1 && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.apellido1}
              </Text>
            )}
            <Text style={styles.label}>Segundo Apellido:</Text>
            <TextInput
              value={values.apellido2}
              style={inputStyle}
              onChangeText={handleChange("apellido2")}
              onBlur={() => setFieldTouched("apellido")}
              placeholder="ej.  Pérez Cruz"
              placeholderTextColor="#797979"
            />
            {touched.apellido2 && errors.apellido2 && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.apellido2}
              </Text>
            )}
            <Text style={styles.label}>Edad:</Text>
            <TextInput
              value={values.edad}
              style={inputStyle}
              onChangeText={handleChange("edad")}
              onBlur={() => setFieldTouched("edad")}
              placeholder="##"
              placeholderTextColor="#797979"
            />
            {touched.edad && errors.edad && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.edad}
              </Text>
            )}
            <Text style={styles.label}>Correo:</Text>
            <TextInput
              value={values.correo}
              style={inputStyle}
              onChangeText={handleChange("correo")}
              onBlur={() => setFieldTouched("correo")}
              placeholder="ej. micorreo@mail.com"
              placeholderTextColor="#797979"
            />
            {touched.correo && errors.correo && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.correo}
              </Text>
            )}
            <Text style={styles.label}>Teléfono:</Text>
            <TextInput
              value={values.telefono}
              style={inputStyle}
              onChangeText={handleChange("telefono")}
              onBlur={() => setFieldTouched("telefono")}
              placeholder="####-####"
              placeholderTextColor="#797979"
            />
            {touched.telefono && errors.telefono && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.telefono}
              </Text>
            )}
            <Text style={styles.label}>Domicilio:</Text>
            <TextInput
              value={values.domicilio}
              style={inputStyle}
              onChangeText={handleChange("domicilio")}
              onBlur={() => setFieldTouched("domicilio")}
              placeholder="Dirección exacta"
              placeholderTextColor="#797979"
            />
            {touched.domicilio && errors.domicilio && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.domicilio}
              </Text>
            )}
            <Text style={styles.label}>Sueldo:</Text>
            <TextInput
              value={values.sueldo}
              style={inputStyle}
              onChangeText={handleChange("sueldo")}
              onBlur={() => setFieldTouched("sueldo")}
              placeholder="0.00"
              placeholderTextColor="#797979"
            />
            {touched.sueldo && errors.sueldo && (
              <Text style={{ fontSize: 10, color: "#FF0D10", marginLeft: 60 }}>
                {errors.sueldo}
              </Text>
            )}
            <View style={{ marginTop: 30 }}>
              <Button
                style={{ height: 40 }}
                color="#A01864"
                title="CALCULAR!"
                disabled={!isValid}
               onPress={handleSubmit}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 50,
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  titulo2: {
    color: "gray",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 25,
    alignSelf: "flex-start",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 50,
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
  label: {
    fontSize: 15,
    color: "white",
    marginBottom: 10,
    marginStart: 15,
  },
  boton: {
    padding: 40,
  },
});

console.disabledYellowBox = true;
