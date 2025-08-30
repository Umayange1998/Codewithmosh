

function Stopwatch(){
    let startTime, endTime, duration=0, running;

    this.start = function(){
        if(running){
            throw new Error('Stopwatch has Already Started');
        }else{
            startTime= new Date();
            running = true;
        }
    }
this.stop = function(){
        if(!running){
            throw new Error('Stopwatch is not Started yet');
        }else{
            endTime= new Date();
            running = false;
            const seconds = (endTime.getTime() - startTime.getTime())/1000;

            duration +=seconds;
        }
    }
    
    this.reset = function(){
        startTime=null;
        endTime=null;
        duration=0;
        running=false;
    }

    Object.defineProperty(this, 'duration',{
        get:function(){
            return duration;
        }
    })


}

const sw = new Stopwatch();