import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel,Stack,Typography} from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useNavigate } from 'react-router-dom';
function Skills() {
    const data1 = Array();
    dataItem.map((data) => data1.push(data.skills));
    const skill_emp = Array();
    data1.map((data) => skill_emp.push(...data));
    const set1 = [...new Set(skill_emp)];
    const [Balue, setBalue] = useState([]);
    const [matchingIndices, setMatchingIndices] = useState([]);
  
  
    const handleValue = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        // Update Balue array with the selected checkbox value
        setBalue((prevBalue) => [...prevBalue, value]);
  
        // Find the indices of dataItem where skills match the selected value
        const indices = dataItem.reduce((acc, item, index) => {
          if (item.skills.includes(value)) {
            acc.push(index);
          }
          return acc;
        }, []);
  
        setMatchingIndices((prevIndices) => [...prevIndices, ...indices]);
      } else {
        // Remove the value if checkbox is unchecked
        setBalue((prevBalue) => prevBalue.filter((item) => item !== value));
  
        // Remove the indices corresponding to the unchecked value
        setMatchingIndices((prevIndices) =>
          prevIndices.filter((index) => !dataItem[index].skills.includes(value))
        );
      }
    };
  
    console.log(Balue);
    
    console.log(matchingIndices);
  

    const navigate=useNavigate();
  return (
    <>
        <Box bgcolor={'#003580'} minHeight={'150vh'} paddingLeft={2} color={'white'}>
            <Box>
            <Typography variant='h3' color={'black'} paddingLeft={0} fontStyle={'oblique'} fontFamily={'serif'}>CHOOSE MULTIPLE SKILLS:</Typography>
            {set1.map((data) => (
                        <FormControlLabel
                            key={data}
                            label={data}
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon />}
                                    value={data}
                                    checkedIcon={<CheckBoxIcon style={{ color: 'tomato' }} />}
                                    onChange={handleValue}
                                />
                            }
                        />
                    ))}
            </Box>
            <Stack direction={'row'} spacing={2}>
                <Button variant='contained'  color='warning' onClick={()=>(navigate(-1))}>Go back</Button>
                <Button variant='contained' color='warning' onClick={()=>(navigate('/assign'))}>Submit</Button>
            </Stack>
        </Box>
        
    </>
  )
}

export default Skills;

function guna()
{
    return (
        <h1>Guna hii</h1>
    );
}
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
        "jobTitle" : "Specialist Infrastructure – (Build and Release)", 
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
    },
{ "_id" : { "$oid" : "513197f430040316a9393d3c" }, "company" : { "companyId" : 974238, "companyName" : "Sapient Global Markets" }, "jobTitle" : "Manager Technology Java", "location" : [ 77.070722, 28.509578 ], "skills" : [ "Core java","Java - spring framework"," J2EE"," Java - ORM"," Java - swing applet"," Java - web presentation frameworks","Java - messaging implementation","Java web services","SQL development languages","Enterprise architecture planning (reap)","Planning/ execution ","Tracking","Scoping and estimating", "Data modeling"], "formattedAddress" : "Unitech Infospace, Ground Floor, Tower A, Building 2, Sector 21, Dundahera, Gurgaon, Haryana, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d41" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "Sr SDE - Senior Ruby Software Engineer", "location" : [ 77.064564, 28.464956 ], "skills" : [ "Ruby","Automated testing","Expertise in Rails","Computer Science"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d42" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "SDE I - Ruby Software Engineer", "location" : [ 77.064564, 28.464956 ], "skills" : [ "Ruby", "Object-Oriented Design","Testing","Debugging","Database Administration"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d43" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "SDE II - Ruby Software Engineer", "location" : [ 77.064564, 28.464956 ], "skills" : [ "Ruby", "Object-Oriented Design","Testing","Debugging","Database Administration"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d44" }, "company" : { "companyId" : 288351, "companyName" : "SlideShare" }, "jobTitle" : "Software Engineers (Ruby / Python / Java)", "location" : [ 77.09781599999999, 28.45467 ], "skills" : [ "Ruby"," Python"," Java" ], "formattedAddress" : "Ext Golf Course Road, Gurgaon, Haryana, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d47" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "Software Dev Engineer (Active Analytics)", "location" : [ 77.064564, 28.464956 ], "skills" : [ "Python","Data Structure"," Algorithms","Testing Basics","Databases","Operating Systems"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d48" }, "company" : { "companyId" : 164008, "companyName" : "GlobalLogic" }, "jobTitle" : "QA Automation Engineer (Whitebox)", "location" : [ 77.43432799999999, 28.498109 ], "skills" : [ "Java"," Python"," PHP","Load Runner","White box testing"], "formattedAddress" : "Sector 144, Noida, Uttar Pradesh, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d49" }, "company" : { "companyId" : 164008, "companyName" : "GlobalLogic" }, "jobTitle" : "QA Automation Lead (Whitebox)", "location" : [ 77.43432799999999, 28.498109 ], "skills" : ["Java"," Python"," PHP","Load Runner","White box testing","SQL Scripts","Software Development Life Cycle"," STLC", "XP"," GSDM"], "formattedAddress" : "Sector 144, Noida, Uttar Pradesh, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d4a" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "SDE II - Front End Software Engineer", "location" : [ 77.064564, 28.464956 ], "skills" : ["HTML","CSS","JavaScript","Knowledge of Frameworks and Libraries","Version contro","WPO","Cross-browser","Device testing"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" },
{ "_id" : { "$oid" : "513197f430040316a9393d4b" }, "company" : { "companyId" : 103683, "companyName" : "Burns Sheehan" }, "jobTitle" : "Javascript Developer", "location" : [ -0.087268, 51.511592 ], "skills" : [  "HTML"," CSS"," CSS framework"," Browser APIs","NodeJS","TypeScript","Git and GitHub" ], "formattedAddress" : "75 King William Street, London, United Kingdom" },
{ "_id" : { "$oid" : "513197f430040316a9393d4c" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Javascript Developer - Javascript Programmer - Node.JS Developer", "location" : [ -118.404471, 33.978622 ], "skills" : ["JavaScript"," Asynchronous Programming","Node. js Frameworks","RESTful API Development","Debugging and Testing Skills"], "formattedAddress" : "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" },



{ "_id" : { "$oid" : "513197f430040316a9393d4e" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "JavaScript Developer - Backbone.js", "location" : [ -96.79497600000001, 33.018308 ], "skills" : [ "JavaScript","Web markup","REST API","AJAX","Require.js or AMD" ], "formattedAddress" : "Suite 400, 1400 Preston Road, Plano, TX, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d52" }, "company" : { "companyId" : 1441, "companyName" : "Google 1 - US" }, "jobTitle" : "Partner Technology Manager", "location" : [ 77.124055, 28.546208 ], "skills" : ["Innovation and creativity","Project management","Negotiation and influence","Strategic thinking"], "formattedAddress" : "Swarna Jayanti Marg, Mahipalpur Extension, Mahipalpur, New Delhi, Delhi, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d53" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Javascript Developer - JavaScript, Consumer Web, JS Frameworks", "location" : [ -122.078488, 37.414198 ], "skills" : [ "Node.js" ,"JavaScript"," Consumer Web", "JS Frameworks"], "formattedAddress" : "1400 North Shoreline Boulevard, Mountain View, CA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d54" }, "company" : { "companyId" : 1035, "companyName" : "Microsoft" }, "jobTitle" : "Partner Segment Marketing Mgr", "location" : [ 77.09338200000001, 28.495068 ], "skills" : [ "Cloud", "Data analysis","B2B marketing","Analytical skills","Cycle management","Product knowledge" ], "formattedAddress" : "DLF Cyber Green, Gurgaon, Haryana, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d55" }, "company" : { "companyId" : 1441, "companyName" : "Google" }, "jobTitle" : "Enterprise SMB Sales Representative", "location" : [ 77.088823, 28.495624 ], "skills" : [ "Cloud","Good verbal communication","Written communication","Relationship-building", "Negotiation","Communication" ], "formattedAddress" : "8th and 9th Floors, Tower C Building No. 8, Dlf Cyber City, Gurgaon, Haryana, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d56" }, "company" : { "companyId" : 1441, "companyName" : "Google" }, "jobTitle" : "Enterprise SMB Sales Manager", "location" : [ 77.088823, 28.495624 ], "skills" : [ "Cloud", "Good verbal communication","Written communication","Relationship-building", "Negotiation","Communication","Leadership","CRM"], "formattedAddress" : "8th and 9th Floors, Tower C Building No. 8, Dlf Cyber City, Gurgaon, Haryana, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d57" }, "company" : { "companyId" : 1480, "companyName" : "Adobe" }, "jobTitle" : "Software Developer (PHP, SOAP/REST, SQL)", "location" : [ 77.344826, 28.588672 ], "skills" : [ "PHP","MySQL","Leadership","DevOps","Operating system","JavaScript","Mentoring","API","Attention to detail","Debugging knowledge" ], "formattedAddress" : "I-1A, City Center, Sector 25-A, Sector 25A, Noida, Uttar Pradesh, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d58" }, "company" : { "companyId" : 2451595, "companyName" : "HelpingDoc" }, "jobTitle" : "Sr. Software Developer (PHP, MySQL)", "location" : [ 77.2026103, 28.6751689 ], "skills" : ["Data Structure"," Algorithms","Testing Basics","Databases","Operating System","PHP", "SOAP/REST","SQL"], "formattedAddress" : "Helping Hands, Basti Harphool Singh, New Delhi, Delhi 110006, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d59" }, "company" : { "companyId" : 233654, "companyName" : "KLEWARD" }, "jobTitle" : "Senior Software Engineer - PHP/Zend", "location" : [ 77.3855549, 28.6120528 ], "skills" : [ "PHP","MySQL","Leadership","DevOps","Operating system","JavaScript","Mentoring","API","Attention to detail","Debugging knowledge" ], "formattedAddress" : "Kleward Consulting Pvt Ltd, A-21, Sector 65, Sector - 106, Sector 65, New Delhi, Delhi 201301, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d5a" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "Senior Hadoop Admin", "location" : [ 77.064564, 28.464956 ], "skills" : [ "Hadoop", "Networking","Leadership","Operating system","Mentoring","API","Attention to detail","Debugging knowledge","Unix "," Linux OS","Troubleshooting skills" ], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d5b" }, "company" : { "companyId" : 974238, "companyName" : "Sapient Global Markets" }, "jobTitle" : "Hadoop Professionals/Experts ", "location" : [ 77.070723, 28.509541 ], "skills" : ["Hadoop ecosystem", "Analytical","Problem-solving","Big data concepts","Cloud computing ","Networking","Leadership","Operating system","Mentoring","API","Attention to detail","Debugging knowledge","Unix "," Linux OS","Troubleshooting skills" ], "formattedAddress" : "Sector 21, Gurgaon, Haryana, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d5c" }, "company" : { "companyId" : 2751, "companyName" : "Expedia" }, "jobTitle" : "Development Manager", "location" : [ 77.064564, 28.464956 ], "skills" : [  "Business Intelligence","Computer Skills","Research & Strategy Project","Management Skills","Negotiation & Persuasion skills","Collaboration Skills", "Communication and Interpersonal Skills"], "formattedAddress" : "Sector 29, Gurgaon, Delhi, India" }
,{ "_id" : { "$oid" : "513197f430040316a9393d5e" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Sr SCALA Software Engineer - Scala Developer - Scala Programmer", "location" : [ -73.97909799999999, 40.750683 ], "skills" : [ "Java","C++","Python","Scala","development frameworks such as Play and Akka","databases such as MongoDB and Cassandra","Version control systems","API design","Application security" ], "formattedAddress" : "90 Park Avenue #1702, New York, NY, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d5f" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Scala Developer - Scala, Java, PHP", "location" : [ -77.438879, 38.883838 ], "skills" : [ "Scala","Java","PHP", "C++","Python","Scala","development frameworks such as Play and Akka","databases such as MongoDB and Cassandra","Version control systems","API design","Application security" ], "formattedAddress" : "4437 Brookfield Corporate Drive #200, Chantilly, VA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d60" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Scala Developer - Scala, Java, PHP", "location" : [ -76.851856, 39.184974 ], "skills" : [ "Scala", "Java","C++","Python","Scala","development frameworks such as Play and Akka","databases such as MongoDB and Cassandra","Version control systems","API design","Application security" ], "formattedAddress" : "9891 Brokenland Parkway, Columbia, MD, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d61" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Java Developer (NYCScala Developer)", "location" : [ -73.97909799999999, 40.750683 ], "skills" : [ "Scala","Java","PHP"," Scala ecosystem","Apache Hadoop","Apache Spark","Kafka" ], "formattedAddress" : "90 Park Avenue #1702, New York, NY, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d62" }, "company" : { "companyId" : 207788, "companyName" : "Erlang Solutions Ltd." }, "jobTitle" : "Senior Erlang Developers", "location" : [ -0.07543800000000001, 51.518826 ], "skills" : [ "Erlang", "Cowboy","RabbitMQ","Riak","EUnit","PropEr","C","C++","Python","JavaScript","Objective C","Databases" ], "formattedAddress" : "29 London Fruit & Wool Exchange, Brushfield Street, City of London, United Kingdom" }
,{ "_id" : { "$oid" : "513197f430040316a9393d63" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Senior Erlang Developer for massive international gaming company", "location" : [ -118.404471, 33.978622 ], "skills" : [ "Erlang","Computer games (Development or Design)","Computer games programming","Computer science","Games technology","Mathematics","Physics","Software engineering","Cowboy","RabbitMQ","Riak","EUnit","PropEr","C","C++","Python","JavaScript","Objective C","Databases" ], "formattedAddress" : "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d64" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Senior Erlang Developer for massive international gaming company", "location" : [ -118.404471, 33.978622 ], "skills" : [ "Erlang","Computer games (Development or Design)","Computer games programming","Computer science","Games technology","Mathematics","Physics","Software engineering","Cowboy","RabbitMQ","Riak","EUnit","PropEr","C","C++","Python","JavaScript","Objective C","Databases" ], "formattedAddress" : "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d65" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Senior erlang developer - Erlang, OTP Development/Coding, Telecommunication", "location" : [ -77.438879, 38.883838 ], "skills" : [ "Erlang","Erlang","OTP Development/Coding","Telecommunication","Erlang concepts","Fault-tolerant systems using Erlang","Concurrency and Parallelism in Erlang"], "formattedAddress" : "4437 Brookfield Corporate Drive #200, Chantilly, VA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d66" }, "company" : { "companyId" : 21836, "companyName" : "CyberCoders" }, "jobTitle" : "Senior Erlang OTP Developer - Erlang, OTP Development, Telecommunication", "location" : [ -77.438879, 38.883838 ], "skills" : [ "Erlang","Erlang","OTP Development/Coding","Telecommunication","Erlang concepts","Fault-tolerant systems using Erlang","Concurrency and Parallelism in Erlang"], "formattedAddress" : "4437 Brookfield Corporate Drive #200, Chantilly, VA, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d67" }, "company" : { "companyId" : 2031, "companyName" : "Time Warner Cable" }, "jobTitle" : "Sr. Software Engineer, (HTTP, HTML 5, CSS, JSON, Java, Scala/Lift, Groovy/Grails, Spring,Lucene/Solr) Common Services Tier Job", "location" : [ -104.985392, 39.669076 ], "skills" : [ "Clojure","HTTP","HTML 5","CSS","JSON","Java","Scala/Lift","Groovy/Grails","Spring","Lucene/Solr"  ], "formattedAddress" : "2615 South Sherman Street, Denver, CO, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d68" }, "company" : { "companyId" : 4295, "companyName" : "EchoStar Corporation" }, "jobTitle" : "Software Engineer (Java, C++, Python)", "location" : [ -104.867192, 39.575948 ], "skills" : [ "Clojure","Java","C++","Python","Object-Oriented Design","Testing","Debugging","Database Administration","Software Development","Communication","Organisation"], "formattedAddress" : "100 Inverness Terrace East, Englewood, CO, United States" }
,{ "_id" : { "$oid" : "513197f430040316a9393d69" }, "company" : { "companyId" : 528404, "companyName" : "Sonian" }, "jobTitle" : "Principal Software Engineer, User Interface", "location" : [ -71.199217, 42.291374 ], "skills" : [ "Clojure","Expertise in software development","C++","Java","HTML","Management experience","Software testing","Project management tools","Adjust software","Debugging"], "formattedAddress" : "95 Wells Avenue, Newton, MA, United States" }
];
