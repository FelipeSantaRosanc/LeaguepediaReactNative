import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Modal } from "./src/Components/Modal";

const Lol = axios.create({
  baseURL: "http://ddragon.leagueoflegends.com/cdn",
});

interface ChampionData {
  data: {
    [key: string]: Champion;
  };
}

interface Champion {
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
}

export function getChampions(): Promise<AxiosResponse<ChampionData>> {
  const url = `/12.6.1/data/pt_BR/champion.json?locale=pt_BR`;

  return Lol.get(url);
}

export default function App() {
  const [championData, setChampionData] = useState<ChampionData | undefined>(
    undefined
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedChampion, setSelectedChampion] = useState<Champion>(
    {} as Champion
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getChampions();
        setChampionData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const renderChampion = ({ item }: { item: Champion }) => (
    <TouchableOpacity
      onPress={() => openModal(item)}
      style={styles.championItem}
    >
      <Image
        source={{
          uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${item.image.full}`,
        }}
        style={styles.championImage}
      />
      <Text style={styles.championName}>{item.name.toUpperCase()}</Text>
      <Text>Ver detalhes</Text>
    </TouchableOpacity>
  );

  const openModal = (champion: Champion) => {
    setSelectedChampion(champion);
    setIsModalVisible(true);
  };

  return (
    <>
      <Modal
        selectedChampion={selectedChampion}
        isModalVisible={isModalVisible}
        setModalIsVisible={setIsModalVisible}
      />
      <View style={styles.containerChampion}>
        {championData && (
          <FlatList
            data={Object.values(championData.data)}
            renderItem={renderChampion}
            keyExtractor={(item: Champion) => item.name}
            numColumns={4}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerChampion: {
    flex: 1,
    backgroundColor: "#399fff",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  championItem: {
    flex: 1,
    alignItems: "center",
    marginBottom: 16,
  },
  championImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  championName: {
    backgroundColor: "black",
    width: 100,
    height: 20,
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
    alignItems: "center",
  },
});
