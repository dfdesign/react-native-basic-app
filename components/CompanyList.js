import { View, Text, StyleSheet } from "react-native"

let MoviesList = props => {
    let {items} = props
    return <View>
      {items.map(movie => (
        <View>
          <Text key={movie.title} style={styles.companyList}>{movie.title}</Text>
        </View>
      ))}
    </View>
}

export default MoviesList

const styles = StyleSheet.create({
    companyList: {
        backgroundColor: '#ebebeb',
        width: '100%'
    }
});
  