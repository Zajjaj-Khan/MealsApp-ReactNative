import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        margin: 6,
        textAlign: "center",
      },
    
      subtitleContainer: {
        padding: 6,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 24,
      },
})