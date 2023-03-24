import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd() {
    console.log("botao");
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Textos no geral*/}
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quinta, 23 de Março de 2023.</Text>

{/* verificar os styles do form */}
      <View style={styles.form}>
        {/* Caixa de texto digitáavel  */}
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6B6B6B"
          //keyboardType="email-address"
          //Alguns types estao disponiveis em sistemas operacionais diferentes https://reactnative.dev/docs/textinput#keyboardtype
        />
        {/* Botoes - touchableOpacity engloba algum <Text> </Text> que for colocado por dentro */}
        {/* o onPress é uma propriedade que chama uma funcao ou o que for desejado para o que acontece quando o botao é clicado */}
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
