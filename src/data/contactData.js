import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

const contactData = [

{
id:1,
title:"Mobile",
value:"+91 6304441992",
icon:FaPhoneAlt,
},

{
id:2,
title:"LinkedIn",
value:"linkedin.com",
icon:FaLinkedinIn,
link:"https://www.linkedin.com/in/v-hari-b55b34251/"
},

{
id:3,
title:"GitHub",
value:"github.com/vadlaharinath",
icon:FaGithub,
link:"https://github.com/vadlaharinath"
},

{
id:4,
title:"Email",
value:"vadlaharinath22@gmail.com",
icon:FaEnvelope,
},

{
id:5,
title:"LeetCode",
value:"leetcode.com",
icon:SiLeetcode,
link:"https://leetcode.com/u/VADLAHARINATHACHARI/"
}

];

export default contactData;