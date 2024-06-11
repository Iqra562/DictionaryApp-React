import Header from "./components/Header/Header"
import { alpha, styled } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import './App.css'
import Definition from "./components/Definition/Definition";
import ApiContextProvider from "./Context/ApiContextProvider";
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/Layout/Layout";

function App() {
  
  return (
    <>
        {/* <ThemeProvider theme={darkTheme}>
    <ApiContextProvider>
          

   <div style={{
     height:"100vh",backgroundColor: lightMode? "#fff": "#282c34",
     color: lightMode ? "black":"white",   
     transition:"all 0.5s linear"
   }}>

   <Container maxWidth="md">
   
<div style={{position:"",top:0,right:13,paddingTop:10}}>
<span style={{color:"white"}}> {lightMode ? "Dark Mode":"Light Mode"}</span>
<DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)}/>
</div>
<Header />
<Definition />
   </Container>
   </div>
     </ApiContextProvider>
        </ThemeProvider> */}
        <Layout/>
        {/* <div style={{
          backgroundColor:"red",
          padding:"20px"
        }}>
Science is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
Comments
Science is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
Comments
Science is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
CommentsScience is one of the important subjects for students. It contains a lot of information about our world, solar system, and other fascinating things that exist in the universe. While it is an interesting subject, sometimes students find it difficult to study mainly because the subject deals with a lot of facts, laws, equations and complex diagrams.

To facilitate easy learning and help students master science subject in each class we are offering a comprehensive set of CBSE Notes for classes 6 to 10 here. The notes provided here have been put together by subject experts who have further designed it in such a way that these notes will provide complete and accurate explanations as well as answers for each chapter topics. Some of the other key highlights of the notes include;

The notes will help students get a clear insight on all the concepts and retain them for a longer period of time.
The notes have especially been prepared with an exam-oriented approach.
These notes are based in accordance with the latest CBSE syllabus.
The notes also offer a good overview of the important chapter topics.
The notes help in quick and effective revisions before the exams so that you can be stress-free and confident.
Students can access the notes given here for free and these are the premier study materials that will prove to be useful in preparing as well as scoring higher marks in the exams. Students can refer these notes without any worry as we have made sure that the style and language used is simple and easily understandable. Our aim is to make the whole studying process fun and interesting for the students.

Access Science Notes from the list given below:

CBSE Science Notes for Class 6
CBSE Science Notes for Class 7
CBSE Science Notes for Class 8
CBSE Science Notes for Class 9
CBSE Science Notes for Class 10
To know more about CBSE Sample Papers and other solutions you can keep visiting BYJU’s.

CBSE Related Links
NCERT Solutions For Class 10 Social Science
NCERT Solutions For Class 8 Civics
Motion Class 9 Notes
Sound Class 9 Notes
Sample Paper
NCERT Solutions For Class 7 Maths
Science Experiments For Class 8
NCERT Books For Class 6 Maths
Work Energy And Power Pdf
CBSE Mobile App
Comments
        </div> */}
   
    </>
  );
}

export default App;
