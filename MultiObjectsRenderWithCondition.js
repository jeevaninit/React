import React from 'react'

const MultiObjectsRenderWithCondition = () => {
  const student1 = { name: 'John', grade: 90 };
  const student2 = { name: 'Bosco', grade: 95 };

  // Condition to check which student has a higher grade
  const higherGradeStudent = student1.grade > student2.grade ? student1 : student2;


  const items = [
    { id: 1, name: 'Item 1', isActive: true },
    { id: 2, name: 'Item 2', isActive: false },
    { id: 3, name: 'Item 3', isActive: true }
  ];
  
  const ActiveItems = () => {
    const activeItems = items.filter(item => item.isActive);


  return (
    <div>
        <h1>MultiObjectsRenderWithCondition</h1>

        {/*  Render output based on condition */}
       
        <p>The student with the higher grade is:</p>
      <p>{higherGradeStudent.name}, {higherGradeStudent.grade}</p>

      {higherGradeStudent === student1 && (
        <p>{higherGradeStudent.name} is doing great!</p>
      )}

      {higherGradeStudent === student2 && (
        <p>++is excelling!</p>
      )}

{/*  get value using boolean condition*/}
<ul>
      {activeItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>



    </div>
  )
}
}
export default MultiObjectsRenderWithCondition