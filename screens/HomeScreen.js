import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({navigation}) => {
    <View>
        <Text>Tela Home</Text>
        <Button title="Abrir Drawer" onPress={() => navigation.toggleDrawer()}></Button>
        <Button title="Notification" onPress={() => navigation.jump("Notifications")}></Button>
    </View>
}

export default HomeScreen