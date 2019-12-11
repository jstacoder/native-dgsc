import React, { useContext, createContext, useState, useCallback } from 'react'
import { useStorage } from '../hooks/storage'

export const CourseContext = createContext({
  courses: [],
  toggleChecked: ()=>{},
  removeCourses: ()=>{},
  addCourse: ()=>{},
  removeCourse: ()=>{},
  hasCheckedCourses: ()=> {},
  getChecked: (multiple = false)=>{},
})

export const CourseContextProvider = ({children}) =>{
  const [courses, setCourses] = useStorage('courses', [], courses=> courses.map(course=> ({...course, checked: false})))

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

  const hasCheckedCourses = useCallback(()=> courses.filter(course => course.checked).length, [courses])

  const getChecked = useCallback((multiple = false) => {
    // if multiple = false and multiple are checked, will raise error
    if(multiple){
      return courses.filter(course=> course.checked)
    }
    let res = null
    courses.forEach(course=>{
      if(course.checked){
        if(res!==null){
          throw new Error('multiple items checked')
        }
        res = course
      }
    })
    return res
  }, [courses])

  const value = {
    courses,
    addCourse,
    removeCourse,
    removeCourses,
    toggleChecked,
    getChecked,
    hasCheckedCourses
  }



  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCourseContext = () => useContext(CourseContext)