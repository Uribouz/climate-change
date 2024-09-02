import { Component } from '@angular/core'
import { PrimaryComponent } from './primary/primary.component'
import { SecondaryComponent } from './secondary/secondary.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimaryComponent, SecondaryComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
