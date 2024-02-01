import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyleText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const RepositoryItemHeader = (props) => {
    return (
        <View style={{flexDirection: 'row', paddingBottom: 3}}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{url: props.ownerAvatarUrl}}/>
            </View>
            <View style={{ flex: 1 }}>
                <StyledText fontSize='bold' fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText color='textSecondary'>{props.description}</StyledText>
                <StyledText style={styles.language}>{props.language}</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        marginVertical: 4,
        overflow: 'hidden',
        borderRadius: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem