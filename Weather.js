import propTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: 'thunderstorm-sharp',
        gradient: ['#141E30', '#243B55'],
        title: 'Сиди дома',
        subtitle: 'Ты видишь что на улице?'
    },
    Drizzle: {
        iconName: 'cloud-drizzle',
        gradient: ['#3a7bd5', '#3a6073'],
        title: 'Возьми зонтик',
        subtitle: 'Возможно скоро дождь усилится '
    },
    Rain: {
        iconName: 'cloud-rain',
        gradient: ['#000046', '#1CB5E0'],
        title: 'На улице дождь',
        subtitle: 'А значит скоро будет радуга!'
    },
    Snow: {
        iconName: 'snow-sharp',
        gradient: ['#83a4d4', '#b6fbff'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Dust: {
        iconName: 'cloud-offline',
        gradient: ['#B79891', '#94716B'],
        title: 'Пыльно',
        subtitle: 'Лучше закройте окна'
    },
    Smoke: {
        iconName: 'cloudy-outline',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'На улице смог :(',
        subtitle: 'Не советую выходить без необходимости'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        title: 'На улице снежок!',
        subtitle: 'Одевайтесь потеплее, лепите снеговиков'
    },
    Mist: {
        iconName: 'weather-hazy',
        gradient: ['#606c88', '#3f4c6b'],
        title: 'Ни черта не видно в тумане',
        subtitle: 'Зато как в Сайлент-Хилле :)'
    },
    Clear: {
        iconName: 'md-cloudy-outline',
        gradient: ['#56CCF2', '#2F80ED'],
        title: 'Погода супер :)',
        subtitle: 'Иди гулять, хватит сидеть дома!'
    },
    Clouds: {
        iconName: 'cloud-done-outline',
        gradient: ['#757F9A', '#D7DDE8'],
        title: 'Облака',
        subtitle: 'Белогривые лошадки'
    },
}

const Weather = ({ data }) => {
    const { temp, condition } = data;
    const newTemp = Math.floor(temp);

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle={'light-content'} />
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{newTemp}°</Text>
                {/* <Text style={styles.temp}>{condition}</Text> */}
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: 'center'
    },
    textContainer: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired,
}

export default Weather;