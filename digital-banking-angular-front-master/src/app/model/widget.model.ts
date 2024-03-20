// widget.model.ts

export class Widget {
    // Définissez les propriétés de votre widget ici
    id: number;
    name: string;
    description: string;
    // ... autres propriétés
  
    constructor(id: number, name: string, description: string /* ... autres paramètres */) {
      this.id = id;
      this.name = name;
      this.description = description;
      // Initialiser d'autres propriétés si nécessaire
    }
  }
  