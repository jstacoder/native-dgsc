import React from 'react'
import { ScrollView } from 'react-native'
import {
  Body,
  Button,
  CardItem,
  Content,
  Text,
} from 'native-base'

import { CourseList } from '../components/CourseList'
import { useCourseContext } from '../contexts/coursesContext'
import { useFocus } from '../hooks/useFocus'

export const ChooseCourseScreen = props =>{
  useFocus(()=> ({title: 'Select Course'}))
  const { getChecked } = useCourseContext()

  const checkedCourse = getChecked()

  return (
    <Content>
      <ScrollView>
        <CourseList displayAddMessage={false}/>
        {!!checkedCourse && <Text>{checkedCourse.name}</Text>}
        {/*{*/}
        {/*  hasCheckedCourses() &&*/}
        {/*    <CardItem>*/}
        {/*      <Body>*/}
        {/*        <Button title={'Start Game'} onPress={()=> props.navigation.navigate('startGame')} dark bordered full/>*/}
        {/*      </Body>*/}
        {/*    </CardItem>*/}
        {/*}*/}
      </ScrollView>
    </Content>
  )
}

