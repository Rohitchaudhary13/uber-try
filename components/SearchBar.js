import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar() {
    return (
        <View style={{marginTop: 15, flexDirection: "row", paddingHorizontal: 20}}>
            <GooglePlacesAutocomplete
            placeholder='Search'
            styles={{
                textInput: {
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    fontWeight: "700",
                    marginTop: 7
                },
                textInputContainer: {
                    backgroundColor: '#eee',
                    flexDirection: "row",
                    borderRadius: 50,
                    alignItems: 'center',
                    marginRight: 10
                }
            }}
            renderLeftButton={() => (
            <View style={{marginLeft: 10}}>
                <Ionicons name="location-sharp" size={24} />
            </View>)} 
            renderRightButton={() => (
                <View style={{
                    marginRight: 10,
                    flexDirection: "row",
                    backgroundColor: 'white',
                    padding: 6,
                    borderRadius: 30,
                    alignItems: 'center'
                }}>
                    <Antdesign name="clockcircle" size={11} style={{marginRight: 6}}/>
                    <Text>Search</Text>
                </View>
            )}/>

        </View>
    )
}
