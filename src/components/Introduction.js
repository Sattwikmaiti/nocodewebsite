import React from 'react'
import p1 from '../dekh.gif'
import p2 from './ll.png'

import {useNavigate} from 'react-router-dom'

const Introduction = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className="navv" style={{backgroundColor:'grey',height:'90px',fontSize:'30px'}}><h2>
      QUESTIONOPEDIA : THE BIBLE OF QUESTIONS </h2>
        
       
        </div>
   <div>
   <div className="navbar">
       <ul className="all">
          <li className="list">
            <div className="link" id="homee" style={{fontSize:'30px',fontFamily:'cursive'}} onClick ={()=>navigate('/Content')}>Home</div>
          </li>
          <li className="list">
            <a className="link" >Silver  </a>
            <ul className="dropdown">
             
              <li className="list">
                <a className="link" href="#SortingSearching">Sorting Techniques</a>
              </li>
              <li className="list">
                <a className="link" href="#Recursion">Recursion</a>
              </li>
              <li className="list">
                <a className="link" href="#BitsManupulation">Bit Manupulation</a>
              </li>
              <li className="list">
                <a className="link" href="#Arrays">Arrays</a>
              </li>
            
            </ul>
          </li>
          <li className="list">
          
            <a className="link" >Gold </a>
            <ul className="dropdown">
            <li className="list">
                <a className="link" href="#NumberTheory">NumberTheory</a>
              </li>
             
              <li className="list">
                <a className="link" href="#LinkedList">Linked List</a>
              </li>
              <li className="list">
                <a className="link" href="#BS">Binary Search</a>
              </li>
              <li className="list">
                <a className="link" href="#Heaps">Heaps</a>
              </li>
              <li className="list">
                <a className="link" href="#StacksQueue">Stacks Queue</a>
              </li>
            </ul>
          </li>
          <li className="list">
          
            <a className="link" >Diamond </a>
            <ul className="dropdown">
             
             
              <li className="list">
                <a className="link" href="#Trees">Trees</a>
              </li>
              <li className="list">
                <a className="link" href="#Backtracking">Backtracking</a>
              </li>
            </ul>
          </li>
          <li className="list">
          
            <a className="link" >Platinum </a>
            <ul className="dropdown">
             
              <li className="list">
                <a className="link" href="#DynamicProg">DynamicPrograming</a>
              </li>
              <li className="list">
                <a className="link" href="#Graphs">Graphs</a>
              </li>
             
              
            </ul>
          </li>
        </ul>
      </div>
      <div id="BS" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Binary Search</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="SortingSearching" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> SortingSearching</h1>
              The processes of looking up a particular data record in the database is called searching. The process of ordering the records in a database is called Sorting. Sorting and searching together constitute a major area of study in computational methods
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/SortingSearching')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p2}  alt=""/>
           </div>
       
      </div>
      <div id="Recursion" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Recursion</h1>
              In computer science, recursion is a method of solving a computational problem where the solution depends on solutions to smaller instances of the same problem. Recursion solves such recursive problems by using functions that call themselves from within their own code
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/Recursion')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="BitsManupulation" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> BitManupulation</h1>
              Bit manipulation is the act of algorithmically manipulating bits or other pieces of data shorter than a word. Computer programming tasks that require bit manipulation include low-level device control, error detection and correction algorithms, data compression, encryption algorithms, and optimization
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="Arrays" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1>Arrays</h1>
              An array is a collection of items of same data type stored at contiguous memory locations. 

This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="DynamicProg" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> DynamicProggraming</h1>
              Dynamic Programming is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later. This simple optimization reduces time complexities from exponential to polynomial.
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="Graphs" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Graph</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="Backtracking" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Backtracking</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      <div id="Heaps" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Heaps</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>

      <div id="LinkedList" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> LinkedList</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>

      <div id="NumberTheory" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> NumberTheory</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>

      <div id="SortingSearching" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> SortingSearching</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>



      <div id="StacksQueue" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> StackQueue</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>

      <div id="Trees" className="peo" >
           <div className="product-details">
            <p className="information" >
              <h1> Trees</h1>
              Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration
         

            </p>
            < div style={{paddingLeft :'70px'}}>
            <div className="btn from-left" onClick={()=>navigate('/BS')} >QuestionBank</div></div>
           </div>

           <div className="product-image">
            <img  src ={p1}  alt=""/>
           </div>
       
      </div>
      /////
      
     


   </div>
   </>
  )
}

export default Introduction
