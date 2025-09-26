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
import { CardIsian } from "@/lib/cardMaincontent";

export function CardSwapper() {
  return (
    <div className="card-swapper">
      <Carousel 
        opts={{ align: "start", loop: true }} 
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="">
           {CardIsian.slice(0, 3).map((isian) => (
            <CarouselItem key={isian.id} className="basis-full">
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
