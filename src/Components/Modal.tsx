import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { styles } from "./styles";

interface Champion {
  name: string;
  title: string;
  blurb: string;
  image: {
    full: string;
  };
}

interface ModalProps {
  isModalVisible: boolean;
  selectedChampion: Champion;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function Modal({
  isModalVisible,
  selectedChampion,
  setModalIsVisible,
}: ModalProps) {
  function closeModal() {
    setModalIsVisible(false);
  }

  const championStats = selectedChampion?.stats || [];

  return isModalVisible ? (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image
          
          source={{
            uri: `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/${selectedChampion.image.full}`,
          }}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.modalName}>{selectedChampion?.name}</Text>
        <Text style={styles.modalTitle}>{selectedChampion?.title}</Text>
        <Text style={styles.modalBlurb}>{selectedChampion?.blurb}</Text>
        <Text style={styles.modalTags}>{selectedChampion?.tags}</Text>
        {Object.entries(selectedChampion.stats).map(([key, value], index) => (
          <Text key={index} style={styles.modalStats}>
            {key}: {value}
          </Text>
        ))}
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
}
