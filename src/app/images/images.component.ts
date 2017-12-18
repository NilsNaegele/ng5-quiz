import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../image.service';
import { SidenavService } from '../sidenav.service';
import { Image } from '../image';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: Image[] = [];
  selectedImage: Image;

  constructor(private imageService: ImageService,
              private sidenavService: SidenavService) { }

  showDetails(image: Image) {
    this.selectedImage = image;
    this.sidenavService.publishOpen(this.selectedImage);
  }

  ngOnInit() {
    this.images = this.imageService.getAllImages();
  }

}
