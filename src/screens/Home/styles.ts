import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    flex:1,
    // marginright aqui ou marginleft no Buton daria na mesma
    //marginRight: 12
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  // o flexbox já é ativo por padrão no native
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31CF67",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12
  },
  // por padrao, o flex direction é por coluna, ou seja, um elemento fica em baixo do outro. 
  //Logo, adicionando o Row, fica um do lado do outro nos componentes que estao com o style do form.
  // para ocupar a linha toda disponivel da tela, foi colocado um flex:1 no Input
  form:{
    width: '100%',
    flexDirection: 'row',

  }
});
