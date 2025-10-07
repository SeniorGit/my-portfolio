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
import { FiExternalLink, FiGithub } from "react-icons/fi";

export function CardSwapper() {
  return (
    <div className="card-swapper">
      <Carousel 
        opts={{ 
          align: "start", 
          loop: true 
        }} 
        className="w-full max-w-6xl mx-auto custom-carousel"
      >
        <CarouselContent className="custom-carousel-content">
           {CardIsian.slice(0, 3).map((isian) => (
            <CarouselItem key={isian.id} className="custom-carousel-item">
                <Card className="featured-project-card">
                  <CardContent className="p-0">
                    <div className="featured-card-container">
                      <div className="featured-img-container">
                        <img src={isian.ImgScr} alt={isian.Title} className="featured-project-image" />
                      </div>
                      <div className="featured-card-content">
                        <h3 className="featured-project-title">{isian.Title}</h3>
                        <h4 className="featured-project-subtitle">{isian.SubTitle}</h4>
                        <p className="featured-project-description">{isian.Description}</p>
                        <div className="featured-card-buttons">
                          <a href={isian.Preview} target="_blank" rel="noopener noreferrer">
                            <Button className="featured-demo-btn">
                              <FiExternalLink className="btn-icon" />
                              Live Demo
                            </Button>
                          </a>
                        {isian.Source && (
                          <a href={isian.Source} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="featured-source-btn">
                              <FiGithub className="btn-icon" />
                              Source Code
                            </Button>
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
        <CarouselPrevious className="featured-carousel-prev" />
        <CarouselNext className="featured-carousel-next" />
      </Carousel>
    </div>
  );
}