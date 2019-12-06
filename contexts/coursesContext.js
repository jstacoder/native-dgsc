import React, { useContext, createContext, useState, useCallback } from 'react'
import { useStorage } from '../hooks/storage'

export const CourseContext = createContext({courses: [], toggleChecked: ()=>{}, removeCourses: ()=>{},addCourse: ()=>{}, removeCourse: ()=>{}})

export const CourseContextProvider = ({children}) =>{
  const [courses, setCourses] = useStorage('courses', [])

  const toggleChecked = useCallback(({name, checked, holes})=>setCourses(
    courses=> courses.filter(
      ({name: courseName})=> name !== courseName
    ).concat({name, checked: !checked, holes})
  ), [courses])

  const addCourse = course => {
    console.log('adding', course)
    setCourses( [...courses, course])
  }
  const removeCourse = ({name})=> setCourses(courses=> courses.filter(({name:courseName})=>name !== courseName))

  const removeCourses = useCallback(()=>
    setCourses(courses=> courses.filter(course=> !course.checked))
  , [courses])

  const value = {
    courses,
    addCourse,
    removeCourse,
    removeCourses,
    toggleChecked,
  }



  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCourseContext = () => useContext(CourseContext)