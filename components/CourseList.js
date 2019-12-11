import React from 'react'
import {
  Body,
  Card,
  CardItem,
  Icon,
  ListItem,
  Right,
  Text,
} from 'native-base'

import { useCourseContext } from '../contexts/coursesContext'

export const CourseList = ({displayAddMessage}) =>{
  const { courses, toggleChecked } = useCourseContext()

  return (
    <Card transparent>
      {courses.length ? courses.sort(
        (courseA, courseB)=> courseA.name >= courseB.name
      ).map(
        course=>
          <CourseListItem course={course} clickCourse={()=> toggleChecked(course)} key={course.name}/>
      ) : displayAddMessage ? <CardItem><Text>click above to add a course</Text></CardItem> : <CardItem><Text>You need to add courses</Text></CardItem>
      }
    </Card>
  )
}


export const CourseListItem = ({ course, clickCourse }) => {
  const click = () => clickCourse()

  return (
    <ListItem button icon iconRight onPress={click}>
      <Body><Text>{course.name} (holes: {course.holes})</Text></Body>
      <Right>
        <Icon
          button
          name={`checkbox-${course.checked ? 'marked' : 'blank'}-outline`}
          style={{
            color: course.checked ? 'green' : 'black'
          }}
          type={'MaterialCommunityIcons'}
          size={25}
        />
      </Right>
    </ListItem>
  )
}
