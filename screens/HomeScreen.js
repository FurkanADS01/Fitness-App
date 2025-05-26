import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FitnessCards from '../components/FitnessCards';
import { Ionicons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FitnessItems } from '../Context';

const HomeScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { calories, minutes, workout } = useContext(FitnessItems);

  // Tema renkleri
  const theme = {
    background: isDarkMode ? "#000" : "#ffffff",
    text: isDarkMode ? "#ffffff" : "#000000",
    card: isDarkMode ? "#1e1e1e" : "#ffffff",
    header: isDarkMode ? "#000000d7" : "#eeeeee",
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop: 20, backgroundColor: theme.background }}
    >
      {/* Üst Kısım */}
      <View style={{ backgroundColor: theme.header, paddingTop: 40, paddingHorizontal: 20, height: 160, width: "100%" }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 50 }}>
          <Text style={{ color: theme.text, fontWeight: "bold", fontSize: 18 }}>Kullanıcı Adı</Text>

          <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode
              ? <Ionicons name="sunny" size={24} color="white" />
              : <Ionicons name="moon" size={24} color="black" />}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>
          <View style={[styles.shadowCards, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardText, { color: theme.text }]}>{calories.toFixed(2)}</Text>
            <Text style={{ color: theme.text }}>KCAL</Text>
          </View>

          <View style={[styles.shadowCards, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardText, { color: theme.text }]}>{workout}</Text>
            <Text style={{ color: theme.text }}>WORKOUTS</Text>
          </View>

          <View style={[styles.shadowCards, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardText, { color: theme.text }]}>{minutes}</Text>
            <Text style={{ color: theme.text }}>MINUTES</Text>
          </View>
        </View>
      </View>

      {/* Alt Kısım (FitnessCards sarmalayıcısı) */}
      <View style={{ /*backgroundColor: theme.background,*/ flex: 1, paddingHorizontal: 20, paddingBottom: 20 }}>
        <FitnessCards />
      </View>
    </ScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadowCards: {
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  }
});
