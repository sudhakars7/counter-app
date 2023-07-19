import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";

import './content.css';


class Content extends Component{
    render(){
        return(
            <><div className="content-container">
            <div className="card">
                <h1>What's New</h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAArlBMVEX/////r0YjHyAAAAD/s0cfGxz/tkj/sUfu7u4aFRYfHSA3NTUACx0TDQ8hHiAXEhOBgIAABB3upkMbGh+RkJC/hzoIAAA3KyK+vb0WGB+hoKHU1NTd3d339/fo6OgQFB5jYWJUPSerq6vOkT3Xlz9FQkOJiIi0s7PGxsZ2dHUpJidaWVkwLS5nSiqebzN7Vy3jnkFQTU6CXy+pdja0fTeMYjBxUSxCMiQwJiJLOCYs3Hh5AAALfklEQVRoge1baZuquBLuTlhECagoiijgvratvZzT/v8/dquCSwhBUXtmvtz6MPMcCXlJpZa3KumXl0clak2JKLVZ/+G57pIRZXoGWWe09W8AdymCiQL/pqN/Hniw0Ynub2oX2aAK6OAfRw5xyd2KKAv4GDr/x5F7lLBZid9+X1o+oT3pN9h6Vv8/8rNSiSoPIyveLS3hsrapJYuHkMOktqol4WPAI59BmHBp1mrLIbcovstyI0tJjx6DI11m5mR55IWM3Dq/+0BY5cCUUkuC3luEdqWxEF10IgQxBNbhXf0R6PTl8CWqMQE66q2YIlJWahBRWS8S3rVW4UtI8LPvDDG4Yoth8qtMz9DhmvrqZeBw3adrrowZvrvBz4icu6E5sJ5a5hE67O6pi1mK7hUvLFGzxKXTebj04V2Srj9a3QnNgcnJJTg083HHiUVX6o3rbfh3WdRnqOqT4vsb9x5occUoA9xrFMbW86LwUJknln8ctrlwlH7NLW9m6aaJQWCwp8x1fX95PTL06y51XUb3kfjjxioLPeJWLTGrRX2d9CL1C4JURsl6KQW9Pt/rEiGlrwJ+SlILvx1I64zo7u9yyQjijJvcHLbSCZNj1LOCMa52M3OBsle3N/ROAeTbk27+szXjPuu/vM+rUvuc2vZv6jvalLPtoz/fgg7nrfoyWdZb81tTRqR0KOnd8uhotIfk6zPXciGcUzrtXRmcBpI7wqcYt7MSJi5PHhexfLZfFIyOygdPlNExtatw15iMiG7BYn0XV+zqPEdN1dh79kCaXOV1WKn7kHocRjfrVjfs9/vhopfUfOQLFl0q/AYYGvHvpgYskX8Na5TnyqQrggzC2Qqx/U1+2UtG2DL361VpUZ3KyHOari1v94OR66NZ5jLS2iX+vaR7RPaS9lI2ui6w4xlnmnKlkbi/UN8uqHJVZwk5LZWgwVat6bPIsGTLvaa5ytrPUYAKcqFn00C0opvr8XyQgFpo1szqPnHXTyK/VMJb6WawhnSzyYzqYyC5OwsMFrP6SVqlLLQC7MPPehHYmH9vXQfe67OTUJqUKYfDnL7nkJvZfY2jBc3229imzPszXzLmCnaxyFFzs3mJObDvReLGUeyAyGosEAjj2UXz1HdR3e2WHWiJxNv2Sd7ikt22Hiw6W3ktM8q7nbcg4sZbQzuJOfRkh1HLAMlr1vt6NXoSjHO3qBbYZDw2X09ifMQl4yB4sGzMlXDR5dJDfplPXYNwJFCbq8iDxWhe5KShbGOiLMDha/KPXa6T6Qn7GnIP2xg0UWMPamBjRcho6UT6rZXagX6afqM78URA3trnLkySDmUF+Q/zU1Hcwb6GhIy9DSeOT63qBZS91Z/Xi5jjBnYO+hyYkGocoK8oAcCNCi0ij4zAHvl4tx2YP5nVkOPZW0OEHga4zHVrChkp7ny/wZfoRAUN6dQvcp0cMnq79zMxtLFdJcTFVrljv5mvIvLOCzjPhG+Kh01D+2wU0MTwShdURubAZKLBdo7jAJYN2oy/mxnkV213sPkzxx42Nb7zDrGcPHSfEbco3EnICFwNEBjmmxxi27bJ90TLAsOqzfabB8+C9/SbOLRir/tucRWVRUZ2XbV32nF+bfL12W4aMi5/Zuzg2e70DO2d6L7sXH2/5JorGWCOrZkq3OMzTXS1hoIcl95nCPFOVQC+R4xPO085umVtGxzfbhu3UZSivXk558U+dCl/3lvEnjy2ZFj0d5w7JVtbJWNYHdLhu9KgbovZ7FTl5ImhuVzcxtM++7tA3abJk3PBd5nNYUx0PUvQYD5L1ZRNH/pEvySyqVsAbYIZT9rgR+OmmfPuE3CuvZewnP4H3V4qMwi47GJ9FWwnNMa5wGE0t0OkYDb85+e9beRswXhHy5Z4fMQc4matvXWmJFh6i65QgbreG2oS7u5Pw/ZO7KkaNIKtKQ3ZeQ7xE0mfYDaSh++pQMP0rD76lkMar+KiTfMD6SY29pnPeFugav+MM4aote08+8DWUjZv87MF5nOhdJMtsgZ7nTTEBKE1/8YO1sr6ejlr1ZdTfozg2d+irWkQRnIhA1wqW0dVkBHuW6n0Qom+RrCkhjCptqsGiHvuow/6Ld4usP+Io3DNkhX3ckvGGmPzUiQwXtxnc+fABvvZnkul51pZ6HSfMxwWa2yphAYlFNdVyNnsrzOy2fwb4AQyr+cHA6L7GW9BtgvSt3S5wRmygloy6s7noz0jTuOy5NRZFN854J7fvnxiGwfW5/P5gn9lRdFmhIJBVT+HU+5lWc6lca6n7CQNahapeoK+D8jN+BzLwVHX2VwR+cqWZ/fcy7OHF8MxD15h+AOiI37kkZuh+FCwR+A1kqryVRZXDhA9J4hjYD8fwjraipR7mYkCN75sjLYbNmyYwUsJQr8lt0TUvSGkBN7bx8fH507kGWg2hQfoaIyNtuAG5ngLM/D4rcqM6n4YhI/40wARs4HZJI5cC4oCESl4F6OoiTOY8LnK8rSu7AECf/1p5vJEO77awYLo6FRzeQuDilJR3Ohy0BCKOzlkbRsXs6gXRaA9IjcKtmjPFNBKZONPcL11tnQVGbUYeTBVQKuRhx5RF2pHgZ0T4t1NZCW0Ghm9+RryDJA/70A+nl9nIlPhmq92N+9GPkKL6UeNDP7hX+vE4D6370IGqmtlKy01soJAZwSyXmNX3sK4RNIZndqrvuyr52kRppccC76BjOeSGyEgQyCMJ4ZpZuYxd1Aj68UttzmVySJOYGAUKD4okc8lwT+8ztd4PN6JhBaN+4q6oRaKt0LcNl4nMMM2zjW2BUFWmImhIe+0oByEig55nS43js6CBYmwzaa5/eEzAJ2tcUVF60QO+iG/J5jxl9mRCDuevRW4EJRKRZpDauANL/m5+WZXnSOPTqeuMSb1TkLdyt+NbLl4Z8LC1sclIPJOQIHqlsgM2ueh2gc2DVy8T3E6q4L1Zds26RWeHLfq95Ik2QNv8zqXhWBzVVdGE967OlzUMwFS7m5giuW5b80PFq2LwtMVF5HPBdZVl36fNsFWl5tfdZ1K2gHft+QuZitziNz3r1/pACUGfwSO00ZomQT2pwjc+BR2meSK55fsIXKft5WvHGOEyK6Eusr4aiCpc0YXHwzrSBer9tfFC5Cx5Ru3IvRN4DTdixWd0W54+Lqe9BZhGHbrNX72G5Ox4PnKuuoMrXejrnsL+CXaSMiw1wfsQxIXal7GeD0HBd17JthioFUftKZHFyt2Exj3udrJ5h/N3HZszznXvU5gH7JFbGravrILdLlDeAMYOyVyzjWN5uchsOPA8zz4X/WtbeZy4zAgjpo64b1JvNd9/aQGnSX4m+9LmZqxa3+/DQ/DP1tlOxIWXS26r9Gvr+iqfv2wBON50FG3fwDcSBm58rExxnZvYSPolgC98f7m8nQ5AegSx0BFAiTDHj/aA9Teg8cP1ffPIBsfTyCjtoevj2lbm4DjlbkSpBQkCPGbaEJmYXtbeqZNiHeiBI9Igocxw3NBqWlp31EFq2lm8/UyclL1rrGgmzLYI/QhndDUPjuNRvxnovBfw/zCduRwnGYNbYcV+2MXpTPQQ9Sjaf7FeO0EjY5sdcC50nak1/jGz9ImOPLJvz4ZrDk0KLrZwbO3ND9kDsqQquAxGsFn9rcG8e0XgM/Q4zF2wvza3mcOsI9MEZNyLkr2vCH3Pvnyqk+qWoD2bNQmXVYG4RK52UFYtLmDFbNaLxqEeNUstvk54vPAx73meS3NuAsdaIpQPyENsPYppWZuqRRYWhLKLNc/sy8Iqrnz52POi6bp0F/7+6Jwtl63ztH/6pl7t75Peo//ucV1efiewfPIjMRfvNLkghX905eeyglQqWpn0jzJJ6aGX7/vq5Q+GLAXd47yA2Tv+StmJYX/HUn1JJdq8V+Qmfg3grr/6zecr0hYr50J9/4Xneh/v5L57iZwP6IAAAAASUVORK5CYII=" alt="settings"></img>
                    <p>
                        As a front-end developer at Napier Healthcare, I was responsible for creating user-friendly interfaces and maintaining the company’s management software. Provided solutions with high coding standards maintaining code quality using Sonar and Veracode tools. Worked as full stack developer for more than 3 months on User
                        stories. Optimized web pages for performance, resulting in a 30% improvement in page load times and increased user engagement. Participated in regular code reviews and contributed to the development of best practices for front-end development, resulting in improved code quality and efficiency. Collaborated with the
                        backend team to integrate the database <span>system</span> into the web application.</p>
                        </div> 
                    
                        <div className="card">
                            <p>
                            
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      
                </p>
                </div>
          
          
</div>
            </>
        );
    }
}
export default Content;