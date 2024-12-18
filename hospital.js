const express = require('express');

const app = express();

app.use(express.json());

const users = [{
    name : "Mukesh",
    kidneys : [{
        healthy : false
    }]
}]

app.get('/',function(req,res){
    const kidneys = users[0].kidneys;
    const noOfKidneys = kidneys.length;
    const healthyKidneys = kidneys.filter((kidney)=>{
        if(kidney.healthy) return true;
    })
    const noOfHealthyKidneys = healthyKidneys.length;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys
    });
})

app.post('/',function(req,res){

    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "done"
    })

})

app.put('/',function(req,res){ //replacing all kidneys as healthy kidneys

    //checking if there are unhealthy kidneys or not:
    let unhealthyCheck = false;

    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidenys[i].healthy == false){
            unhealthyCheck = true;
            break;
        }
    }

    if(unhealthyCheck){
        for(let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({});
    }
    else{
        res.status(411).json({
            msg : "all your kidneys are already healthy!"
        })
    }

    
})

app.delete('/',function(req,res){
    //checking if there are unhealthy kidneys or not:
    let unhealthyCheck = false;

    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidenys[i].healthy == false){
            unhealthyCheck = true;
            break;
        }
    }

    if(unhealthyCheck){
        const newKidneys = users[0].kidneys.filter((val)=>{
            if(val.healthy) return true;
        })
        users[0].kidneys = newKidneys;
        res.json({msg : "done"});
    }
    else{
        res.status(411).json({
            msg : "no unhealthy kidneys!"
        })
    }

})


app.listen(3000);