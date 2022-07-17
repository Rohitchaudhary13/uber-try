import React  from 'react';
import { View, ScrollView } from 'react-native'
import BottomTabs from '../components/BottomTabs';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItems from '../components/RestaurantItems';

export default function Home() {
    return (
        <>
        <View style={{marginTop: 40, backgroundColor: 'white', paddingVertical: 15}}>
            <HeaderTabs />
            <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Categories />
            <RestaurantItems />
            <BottomTabs />
        </ScrollView>
        </>
    )
}
