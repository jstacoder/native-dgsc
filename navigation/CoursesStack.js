import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { ListCoursesScreen, AddCourseScreen } from '../screens/CoursesScreen'


export const CoursesStack = createStackNavigator(
  {
    listCourses: ListCoursesScreen,
    addCourse: AddCourseScreen,
  },  {defaultNavigationOptions: {
      header: null,      
  }}
)

CoursesStack.path = ''

