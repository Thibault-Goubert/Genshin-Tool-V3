import { Component, Input } from '@angular/core';
import { Artefact } from 'src/app/Genshin/models/Artefact/artefact.model';
import { ArtefactPiece } from 'src/app/Genshin/models/Artefact/artefactPiece.model';

@Component({
  selector: 'app-artefact-card',
  templateUrl: './artefact-card.component.html',
  styleUrls: ['./artefact-card.component.css']
})
export class ArtefactCardComponent {
  @Input() artefact!: Artefact;
  @Input() piece!: ArtefactPiece;

  
  getArtefactTypeImgSrc(name: string): string{
    return "assets/icons/filters/artifact_icon_"+name.toLowerCase()+"50.png";
  }
}
