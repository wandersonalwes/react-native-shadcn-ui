import { Text, View } from 'react-native'

import { Button } from '../components/button'
import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-6 font-bold text-2xl">React Native Shadcn/UI</Text>

      <View className="gap-4">
        <Button label="default" />
        <Button label="secondary" variant="secondary" />
        <Button label="destructive" variant="destructive" />
        <Button label="ghost" variant="ghost" />
        <Button label="link" variant="link" />
        <Button label="lg" size="lg" />
        <Button label="sm" size="sm" />
      </View>

      <Avatar>
        <AvatarImage source={{ uri: 'https://github.com/wandersonalwes.png' }} />
        <AvatarFallback>Wanderson Alves</AvatarFallback>
      </Avatar>
    </View>
  )
}
