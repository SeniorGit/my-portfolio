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
    {id:2, ImgScr: 'src/assets/MemoryCard.png', Title: 'Memory Card', SubTitle: 'Game', 
        Description: 'The Memory Card web-based game is built with Vite and utilizes the Dragon Ball API to showcase iconic characters. The game is designed to be simple yet interactive, helping players train their memory while delivering an exciting experience for Dragon Ball fans.',
        Source:'https://github.com/SeniorGit/MemoryCard', Preview:'https://memory-card-ten-ruddy.vercel.app/'},
    {id:3, ImgScr: 'src/assets/RockPaperScissor.png', Title: 'Rock Paper Scissor', SubTitle: 'Game', 
        Description: 'Rock Paper Scissors game was developed using HTML, CSS, and JavaScript without any additional libraries or frameworks, with all game logic implemented in pure JavaScript. The game provides a simple interaction between the player and the computer through the choices of Rock, Paper, or Scissors, and displays the outcome—win, lose, or draw', 
        Source:'https://github.com/SeniorGit/RockPaperScissor', Preview:'https://rock-paper-scissor-chi-bice.vercel.app/'},
]

export function CardSwapper() {
  return (
    <div className="card-swapper">
      <Carousel 
        opts={{ align: "start", loop: true }} 
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="">
           {CardIsian.map((isian) => (
            <CarouselItem key={isian.id} className="md:basis-1/1 lg:basis-1/1">
                <Card className="project-card">
                  <CardContent className="p-0">
                    <div className="card-container">
                      <div className="img-container">
                        <img src={isian.ImgScr} alt={isian.Title} className="project-image" />
                      </div>
                      <div className="card-content">
                        <h3 className="project-title">{isian.Title}</h3>
                        <h4 className="project-subtitle">{isian.SubTitle}</h4>
                        <p className="project-description">{isian.Description}</p>
                        <div className="card-buttons">
                          <a href={isian.Preview} target="_blank" rel="noopener noreferrer">
                            <Button className="demo-btn">Live Demo</Button>
                          </a>
                        {isian.Source && (
                          <a href={isian.Source} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="source-btn">Source Code</Button>
                          </a>
                        )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="carousel-nav"/>
        <CarouselNext className="carousel-nav" />
      </Carousel>
    </div>
  );
}


