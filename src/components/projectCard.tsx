import { Button } from "./ui/button"
import "../styles/projectSwap.css"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import "../App.css";


const CardIsian = [
    {id:1, ImgScr: 'src/assets/Consulife.png', Title: 'Consulife', SubTitle: 'Psychology Consultation', 
        Preview: 'https://consulife.humicprototyping.com/', Source: '',
        Description: 'A web-based application designed for online consultations, where users can schedule chats or video calls with psychologists, and an AI detector is available to analyze the patients’ psychological condition.'
    },
    {id:2, ImgScr: 'src/assets/MemoryCard', Title: 'Memory Card', SubTitle: 'Game', 
        Description: 'aaa',
        Source:'https://github.com/SeniorGit/MemoryCard', preview:''},
    {id:3, ImgScr: 'src/assets/', Title: 'bbb', SubTitle: 'bbb', 
        Description: 'bb',
        Source:'', preview:''},
    {id:4, ImgScr: 'src/assets/', Title: 'bbb', SubTitle: 'bbb', 
        Description: 'bbb',
        Source:'', preview:''},
    {id:5, ImgScr: 'src/assets/RockPaperScissor.png', Title: 'Rock Paper Scissor', SubTitle: 'Game', 
        Description: 'Rock Paper Scissors game was developed using HTML, CSS, and JavaScript without any additional libraries or frameworks, with all game logic implemented in pure JavaScript. The game provides a simple interaction between the player and the computer through the choices of Rock, Paper, or Scissors, and displays the outcome—win, lose, or draw', 
        Source:'https://github.com/SeniorGit/RockPaperScissor', preview:'https://rock-paper-scissor-chi-bice.vercel.app/'},
    {id:6, ImgScr: '', Title: '', SubTitle: '', Description: '',Source:'', preview:''},
    {id:7, ImgScr: '', Title: '', SubTitle: '', Description: '',Source:'', preview:''},
    {id:8, ImgScr: '', Title: '', SubTitle: '', Description: '',Source:'', preview:''},
]

export function CardSwapper() {
  return (
    <div className="container">
      <Carousel opts={{ align: "start" }} className="w-full max-w-sm container">
        <CarouselContent>
           {CardIsian.map((isian) => (
            <CarouselItem key={isian.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="container-card">
                      <div className="imgPlacement">
                        <img src={isian.ImgScr} alt="Image Project" />
                      </div>
                      <div className="cardContent">
                        <h1>{isian.Title}</h1>
                        <h2>{isian.SubTitle}</h2>
                        <p>{isian.Description}</p>
                        <div className="cardButton">
                            <a href={isian.Preview}>
                                <Button className="LiveDemo">Live Demo</Button>
                            </a>
                            <a href={isian.Source}>
                                <Button className="LiveDemo">Live Demo</Button>
                            </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}


// export function ProjectCardAllProject(){
//     return(
//         CardContent.map((CardCont)=>{
//             <div className="container-card" key={CardCont.id}>
//                 <div className="imgPlacement">
//                     <img src={CardCont.ImgScr} alt="Image Project" />
//                 </div>
//                 <div className="cardContent">
//                     <h1>{CardCont.Title}</h1>
//                     <h2>{CardCont.SubTitle}</h2>
//                     <p>{CardCont.Description}</p>
//                     <div className="cardButton">
//                         <Button className="LiveDemo">{CardCont.Preview}</Button>
//                         <Button className="sourceCode">{CardCont.Source}</Button>
//                     </div>
//                 </div>
//             </div>
//         })
//     )
// }