/*import axios, { AxiosResponse } from "axios";
import { useEffect, useState} from "react";
import { TouchableOpacity, StyleSheet, View, FlatList } from "react-native";


const Lol = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn'
  });

  interface InfoChampion {
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
    
  }
}

export function getDataInfoChampion():Promise<AxiosResponse<Champion>> {
    const url = `/12.6.1/data/pt_BR/champion.json?locale=pt_BR`;

  return Lol.get(url);
}

export default function DataChampion(){
    const [DataInfoChampion, setDataInfoChampion] = useState<Champion| undefined>(undefined);

    useEffect(() =>{
        async function fetchData() {
            try {
              const response = await getDataInfoChampion();
              getDataInfoChampion(response.data);
            } catch (error) {
              console.error(error);
            }
          }
      
          fetchData();
        }, []);

    return (

        <View style={styles.containerChampionInfo} >
        {DataInfoChampion && (

            <FlatList 
            data={}
            />
        )}
        </View>


    )
} 

const styles = StyleSheet.create ({
containerChampionInfo:{
    width:'100%',
    height:'100%',
    textAlign:'center',
    justifyContent:'center',
},

})*/

