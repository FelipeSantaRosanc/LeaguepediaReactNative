/*import { useState } from "react";
import {

  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import axios from "axios";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});

  const API_KEY = "RGAPI-615f6580-b99d-4692-9ace-4e1ba0ea11d3";

  function buscarPlayer() {
    const APICallString =
      "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
      searchText +
      "?api_key=" +
      API_KEY;

    axios
      .get(APICallString)
      .then(function (response) {
        console.log(response);
        setPlayerData(response.data);
        console.log(playerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(playerData);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.acharCampeaoBotao}
          onPress={(e) => buscarPlayer()}
        >
          <TextInput style={styles.searchtext} onChangeText={setSearchText} />
          <Text>Buscar Player</Text>
        </TouchableOpacity>
      </View>
      {JSON.stringify(playerData) != "{}" ? (
        <>
          <Text >{playerData.name}</Text>
          <Text>Level do Player{playerData.summonerLevel}</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${playerData.profileIconId}.png`,
            }}
          />
        </>
      ) : (
        <>Esse invocador não existe</>
      )}
    </View>
  );
}
*/