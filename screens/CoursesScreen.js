import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'
import { useNavigation, useIsFocused, useFocusEffect } from 'react-navigation-hooks'

import {
  Body,
  Button,
  Card,
  CardItem,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  ListItem,
  Right,
  Text,
  Textarea,
  Title,
} from 'native-base'
import { ExpoLinksView } from '@expo/samples'
import { CourseList } from '../components/CourseList'
import { useHeaderContext } from '../contexts/headerContext'

import { useFocus } from '../hooks/useFocus'
import { useStorage } from '../hooks/storage'
import { useCourseContext } from '../contexts/coursesContext'



export const AddCourseScreen = ({navigation, ...props}) => {
  const { setConfig } = useHeaderContext()
  const focused = useIsFocused()
  console.log(navigation.isFocused())
  useFocus(()=>({ title: 'Add Course', goBackRoute: 'listCourses' }))


  useFocusEffect(useCallback(()=> {
    if(!focused){
      if(navigation.state.routeName==='addCourse'){
        navigation.goBack()
      }
    }
  }, [focused]))



  const { addCourse } = useCourseContext()
  const [name, setName] = useState(null)
  const [holes, setHoles] = useState('9')

  const submit = () => {
    addCourse({
      name,
      holes,
    })
    setName('')
    setHoles('9')
    navigation.goBack('add-course')
  }

  const onSubmitName = name => setName(name)

  const onSubmitHoles = holes => setHoles(holes)


  return (
    <Content>
      <Card transparent>
      <CardItem>
        <Item bordered>
          <Label><Text>Course Name:</Text></Label>
          <Input value={name} onChangeText={onSubmitName}/>
        </Item>
      </CardItem>
      <CardItem>
        <Item bordered>
          <Label><Text>Holes:</Text></Label>
          <Input value={holes} onChangeText={onSubmitHoles}/>
        </Item>
      </CardItem>
      <CardItem>
        <Body>
          <Button
              block
              disabled={name === null || name === ''}
              onPress={submit}>
              <Text>Submit</Text>
          </Button>
        </Body>
      </CardItem>
      </Card>
    </Content>
  )
}

export const ListCoursesScreen = () => {

  const { courses,toggleChecked, removeCourses } = useCourseContext()
  // console.log(courses)
  const navigation = useNavigation()

  const goToAddCourse = () => {
    navigation.navigate({routeName: 'addCourse', key: 'add-course'})
  }

  const toggleCourseChecked = course => toggleChecked(course)

  const hasCheckedCourses = useMemo(()=>{
    let rtn = false
    courses.forEach(course=> {
      if(course.checked){
        rtn = true
      }
    })
    return rtn
  }, [courses])

  useFocus(()=>({
    title: 'Courses',
    icon: {
      onClick: goToAddCourse,
      color: 'black',
      name: 'add-to-list',
      type: 'Entypo'
    }
  }))
  return (
    <Content>


      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
          <Card transparent>
            <CourseList displayAddMessage/>
            {hasCheckedCourses &&
            <CardItem>
              <Body>
                <Button onPress={removeCourses} dark bordered full>
                  <Text>
                    Remove Selected
                  </Text>
                </Button>
              </Body>
            </CardItem>
            }
       </Card>
      </ScrollView>
    </Content>
  )
}

ListCoursesScreen.navigationOptions = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
