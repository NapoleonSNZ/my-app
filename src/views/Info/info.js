import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Info({route,navigation}) {
  const {nombre1, nombre2, apellido1, apellido2, edad, correo, telefono, domicilio, sueldo, afp, isss, renta, sueldoFinal}  = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Descuentos de Empleado </Text>
      <Text style={styles.text}>Nombres: {JSON.stringify(nombre1)} {JSON.stringify(nombre2)}</Text>
      <Text style={styles.text}>Apellidos: {JSON.stringify(apellido1)} {JSON.stringify(apellido2)}</Text>
      <Text style={styles.text}>Edad: {JSON.stringify(edad)}</Text>
      <Text style={styles.text}>Correo: {JSON.stringify(correo)}</Text>
      <Text style={styles.text}>Telefono: {JSON.stringify(telefono)}</Text>
      <Text style={styles.text}>Dirección: {JSON.stringify(domicilio)}</Text>
      <Text style={styles.text}>Sueldo sin Descuentos: {JSON.stringify(sueldo)}  </Text>
      <Text style={styles.text}>AFP: {JSON.stringify(afp)}  </Text>
      <Text style={styles.text}>ISSS: {JSON.stringify(isss)}  </Text>
      <Text style={styles.text}>RENTA: {JSON.stringify(renta)}  </Text>
      <Text style={styles.text}>Sueldo Final: {JSON.stringify(sueldo-afp-isss-renta)}  </Text>
      <Text style={styles.text3}>Muchas Gracias por usar la App!</Text>
      <Button
        title="Regreso"
        onPress={()=>navigation.navigate('Index')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7A263A",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 30,
    color: "#F3D459",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  text: {
    fontSize: 25,
    color: "#1BB1E7",
    fontStyle: "italic",
  },
  text3: {
    fontSize: 25,
    color: "#1BB1E7",
    fontWeight: "bold",
  },
});
