import React from 'react'
import bs1 from '../BS1.jpeg'
import bbs from '../bbs.png'
import ssc from "../NO.mp4"
const BS = () => {
  return (

    <div  style={{color:'lightblue', backgroundColor:'black' ,fontSize:'20px', fontWeight:'bolder',fontSmooth:'always'}}>
       <p>
        
        Binary Search is a searching technique , in which we search an element(say Target) in a sorted list of elements(ascending or descneding).
        Here we have two pointers (low_index and high_index) , indicating the starting and ending point of our array ,respectively. So low_index=0 and high_index=n-1(here n is the length of the sorted list , and since list has indexing from 0 (zero), so it is n-1).
        We use a middle position pointer , say midp , which is the mid point of our indices. 
        So , by defination :<br />
         midp= (low_index+high_index)/2 (NOTE IT )<br />
         We compare the Target element every time with the element at midp position. 
         hence we get three cases 
         <br />
         1. Target == list [midp]  ( list element at midp)  , then we simply terminate our search process<br />
         2. Target 	&#60; list[midp]  , now since the array is sorted ( say ascending order (small to big) )  , we can defintly say that our Target element will lie before midp position and not  after midp postion. 
         so we update the high_index=midp-1
         <br />
         3.Target 	&#62; list[midp]  , now since the array is sorted (  ascending order (small to big) )  , we can defintly say that our Target element will lie after midp position and not before midp postion. 
         so we update the low_index=midp+1
<br />
         Ok Done !!! Yikes ..but WAIT WAIT &#128530; &#128530; <br />
          where is the ending point of the program ?? if the element is not in the list ?? &#128545	; Huh.. sounds thinkable ... 
          now as you can see ..from name low_index must be lower or equal to high_index at any point of time ... so yes we got the condition ..&#129296;.
          untill and unless we have the condition ( low_index &#60;= high_index) satisfied ...we will have the procedure..<br />
          okay !! but why is it binary search ??  ok the answer is ..since we are dividing the search space (the distance between the two pointers ) every time by 2 .. so it is binary search.....&#129317;
           <br />

         
         Follow up code ::<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <img  src={bbs} style={{width:'500px', height:'500px', paddingLeft:'300px'}} /><br /> <br /> <br /> <br /> 
         Time Complexity :o(logn) . we are dividing by two ... so n then n/2 then n/4 ... n/(2^k)
         <br /> 

         Space complexity :o(n) due to list of size n
         <br /> 
         Now in c++ we have Two famous STL(standard template library on binary search ) : lower_bound and upper_bound  with syntax :
          lower_bound (first_index, last_index, val)   and  upper_bound (first_index, last_index, val) <br />
lower_bound returns an index pointing to the first element in the range [first,last) which has a value not less than ‘val’. 

and if the value is not present in the list  then it returns the end index.
upper_bound returns an index pointing to the first element in the range [first,last) which has a value greater than ‘val’. 
now if we write *lower_bound or *upper_bound we will get that element .  If we want postion we can do lower_bound/upper_bound value - staring index ..to get the value.Both has same TC as o(logn)
  
        <br /><br /><br /><br /><br />
         Now lets discuss the utility of BS in competetive coding . Before that ...Lets brief monotonicity and predicate function.
         Predicate functions are functions that return a single TRUE or FALSE. Monotonicity tells us the nature of the funciton and by defination there can not be true between two false and vice versa .. 
         Example : TTTFFTT , FFTFFF are invalid .  FFFTTTT ,TTTFFF are valid . These is monotonous predicate function.
         <br /> Now in coding ... we will see some standard Questions on binary search without so much theory now... as u will understand after seeing the questions
         <br />
         <br />
         
         <h1>Questionss(Must Do): </h1><br />
        Order of doing : 1,4,2,3,8,7,6,5 (easy to hard)
        <br />
         1)<a href="https://codeforces.com/edu/course/2/lesson/6/1/practice" target="_blank">LINK1</a><br />
         2)<a href="https://www.spoj.com/problems/EKO/" target="_blank">LINK2</a><br />
         3)<a target="_blank"href="https://www.spoj.com/problems/AGGRCOW/">LINK3</a><br />
         4)<a target="_blank"href="https://codingcompetitions.withgoogle.com/kickstart/round/00000000008cb0f5/0000000000ba84ae">LINK4</a><br />
         5)<a target="_blank"href="https://www.geeksforgeeks.org/painters-partition-problem/">LINK5</a><br />
         6)<a target="_blank" href="https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article">LINK6</a><br />
         7)<a target="_blank"href="https://www.hackerrank.com/contests/recode-24-0/challenges/light-and-primes/problem">LINK7</a><br />
         8)<a target="_blank"href="https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article">LINK8</a><br />
           <br />
         Solutions : 
         <br />
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 
         <h1>Questions 9 </h1> : 
         <br />
         <div  style={{ paddingLeft:'300px'}}class="embed-responsive embed-responsive-16by9">
  <iframe  style={{width:'700px', height:'500px', }}class="embed-responsive-item" src={ssc} allowfullscreen></iframe>
</div>
<br />
         <img  src={bs1} style={{width:'500px', height:'500px', paddingLeft:'300px'}} />
         <br /> <br /> 

        
                 
               
               
               </p>

    </div>
  )
}

export default BS
