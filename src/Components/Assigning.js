import { Rating, Stack, Typography,Button  } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
function Assigning() {
    const navigate=useNavigate();
    const data1 = Array();
    dataItem.map((data) => data1.push(data.jobTitle));
  return (
    <Stack bgcolor={'GrayText'} minHeight={'150vh'} spacing={7}>
    <Typography variant='h3' color={'-moz-initial'}>You are applicable for:</Typography>
    {data1.map((data) => (
                      <Typography variant='h4'>{data}</Typography>  
                    ))}
    <Rating />
    <Button variant='contained'  color='warning' onClick={()=>(navigate(-1))}>Go back</Button>
    </Stack>
  )
} 

export default Assigning


const dataItem=  [
    { 
        "_id" : { "$oid" : "513197ed30040316a9393d2e" },
        "company" : 
            { "companyId" : 21836,
            "companyName" : "CyberCoders" },
        "jobTitle" : "Ruby on Rails Engineer - PostgreSQL, MongoDB, Redis, HTML, CSS", 
        "location" : [ -118.404471, 33.978622 ],
         "skills" : [ "JavaScript","HTML"," SQL"],
        "ExtraSkills":[" Database maintenance skills "," Knowledge of the OOPS","Front-end Developing Knowledge","MVC Framework","RoR Tools Handling Skills","Passionate About Programming" ],
        "formattedAddress" : "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" 
    },

    { 
        "_id" : { "$oid" : "513197ee30040316a9393d2f" },
        "company" : 
            { "companyId" : 0,
             "companyName" : "Unicommerce eSolutions Pvt. Ltd. " },
        "jobTitle" : "Senior/Java Developer (Java/J2EE, Web services) ",
        "location" : [ 77.31330199999999, 28.584569 ],
         "skills" : ["Servlet", "JSP","Java"], 
        "ExtraSkills" :["Task execution planning","Deployment of all system functions","Analysis of customer needs","Preparation of reports on completed tasks","Automation of work processes"],
        "formattedAddress" : "Lower Ground Floor, B-85,, Sector 2, Noida, Uttar Pradesh, India" 
    },

    { 
        "_id" : { "$oid" : "513197f430040316a9393d30" }, 
        "company" : 
            { "companyId" : 488966,
             "companyName" : "Inventum" }, 
        "jobTitle" : "Java Team Lead",
        "location" : [ 77.410934, 28.5332598 ], 
        "skills" : ["Servlet", "JSP","Java", "J2EE"], 
        "ExtraSkills":["Extensive experience in the IT industry","Sound knowledge of estimation techniques","Sound knowledge of estimation techniques","Excellent analytical skills","Exceptional communication skills"],
        "formattedAddress" : "Inventum Technologies Private Limited, C-70, Phase 2 Extension, NOIDA, Uttar Pradesh 201305, India" 
    },

    { 
        "_id" : { "$oid" : "513197f430040316a9393d32" }, 
        "company" : 
            { "companyId" : 32745, 
            "companyName" : "SapientNitro" }, 
        "jobTitle" : "Specialist Infrastructure  (Build and Release)", 
        "location" : [ 77.070722, 28.509578 ],
         "skills" : [ " Virtualization", "Switches", "Troubleshooting", "Documentation", "Information Technology", "Linux and Active Directory" ], 
        "formattedAddress" : "Unitech Infospace, Ground Floor, Tower A, Building 2, Sector 21, Dundahera, Gurgaon, Haryana, India" 
    },

    { 
        "_id" : { "$oid" : "513197f430040316a9393d33" }, 
        "company" : 
            { "companyId" : 103683, 
            "companyName" : "Burns Sheehan" }, 
        "jobTitle" : "Javascript Developer", 
        "location" : [ -0.087268, 51.511592 ], 
        "skills" : [ "HTML"," CSS"," CSS framework"," Browser APIs","NodeJS","TypeScript","Git and GitHub"
    ], 
        "ExtraSkills":[" A proven track record in cyber security operations","Strong knowledge of OS, Hardware, Networks, Applications and Security","Excellent communication skills, able to articulate to technical and non-technical audiences","An ability to work under pressure in a demanding, highly responsive team",""],
        "formattedAddress" : "75 King William Street, London, United Kingdom" 
    },

    { 
        "_id" : { "$oid" : "513197f430040316a9393d34" }, 
        "company" : 
            { "companyId" : 21836, 
            "companyName" : "CyberCoders" }, 
        "jobTitle" : "JavaScript Developer - JavaScript, Backbone.js, Node.js, HTML5",
        "location" : [ -96.79497600000001, 33.018308 ], 
        "skills" : ["JavaScript","Web markup","REST API","AJAX",
        "Require.js or AMD"], 
        "ExtraSkills":["Three or more years of experience with HTML/CSS/JavaScript and JavaScript frameworks such as jQuery","Experience working in a lean/agile development environment with remote teams","Exceptional communication, organizational, and leadership skills","Excellent debugging and optimization skills","Unit/integration testing experience"],
        "formattedAddress" : "Suite 400, 1400 Preston Road, Plano, TX, United States" 
    },



    { 
        "_id" : { "$oid" : "513197f430040316a9393d36" }, 
        "company" : 
            { "companyId" : 0, 
            "companyName" : "Unicommerce eSolutions Pvt. Ltd. " }, 
        "jobTitle" : "Senior/Java Developer (Java/J2EE, Web services) ",
        "location" : [ 77.31330199999999, 28.584569 ],
         "skills" : ["Java","J2EE"," Web services"], 
        "formattedAddress" : "Lower Ground Floor, B-85,, Sector 2, Noida, Uttar Pradesh, India" 
    }
];