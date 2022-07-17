import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{flexDirection: "row", alignSelf: 'center'}}>
            <HeaderButtons
                text="Delivery"
                backgroundColor="black"
                textColor="white"
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>

            <HeaderButtons
                text="Pickup"
                backgroundColor="white"
                textColor="black"
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>
        </View>
    )
}

const HeaderButtons = (props) => (
    <View>
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            borderRadius: 30}}
            onPress = {() => {props.setActiveTab(props.text)}}>


            <Text style={{color: props.activeTab === props.text ? "white" : "black",
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontWeight: 'bold',
                fontSize: 15}}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)