import { Foundation, FontAwesome6, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarIconStyle: { color: 'white' }, tabBarStyle: { backgroundColor: 'black', borderColor: 'transparent' } }}>
      <Tabs.Screen name='index' options={{ tabBarIcon: () => <Foundation name='home' size={24} color='white' /> }} />
      <Tabs.Screen name='characters/index' options={{ tabBarIcon: () => <FontAwesome6 name='people-group' size={24} color='white' /> }} />
      <Tabs.Screen name='characters/[id]/index' options={{ href: null }} />
      <Tabs.Screen name='moments/index'options={{ tabBarIcon: () => <MaterialCommunityIcons name='movie-open-star' size={24} color='white'/> }} />
      <Tabs.Screen name='moments/[id]/index' options={{ href: null }} />
      <Tabs.Screen name='info' options={{ tabBarIcon: () => <MaterialCommunityIcons name="movie-search" size={24} color="white" /> }} />
      <Tabs.Screen name='profile' options={{ tabBarIcon: () => <FontAwesome5 name='user-tie' size={24} color="white" /> }} />
    </Tabs>
  );
}
