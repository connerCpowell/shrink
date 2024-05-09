import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants"

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height:'100%'}}>
        <View className="w-full justfy-center items-center h-full px-4">
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode="contain"
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
                Find the perfect Shrink, {' '}
                <Text className="text-secondary-200 text-4xl">
                 Dummy
                </Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] -bottom-2 -right-28"
              rezieMode="contain"
            />

          </View>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


