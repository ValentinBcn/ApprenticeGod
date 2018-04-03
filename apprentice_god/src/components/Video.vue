
<template>
  <div class="video">
    <video :src="videoUrl" autoplay autobuffer controls allowfullscreen />
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Video',
  data () {
    return {
      // Initialisation du src de l'élement <video>
      videoUrl: '',
      aspi: true,
      ivre: true,
      lucyIvre : false,
      bombePoivre : false
    }
  },

  methods: {

    // Gere les cas où aucun input est donné par l'utilisateur (choix par défaut)
    handleDefaultChoice () {
      // Récupère tous les éléments <video /> dans un tableau et retourne l'élément de la première case de ce tableau
      var video = document.getElementsByTagName('video')[0]

      // console.log(video.currentTime)
      if (this.videoUrl === '/static/videos/decompte.mp4' && video.currentTime >= 98) {
        /**
        DEBUT
        **/
        // Change le src de <video />
        this.videoUrl = '/static/videos/debut.mp4'
        // Change l'url sans refresh la page
        window.history.pushState({}, null, '/video/debut.mp4')
      } else if (this.videoUrl === '/static/videos/debut.mp4' && video.currentTime >= 175) {
        /**
        DEBUT
        **/
        // Change le src de <video />
        this.videoUrl = '/static/videos/dessousSexy.mp4'
        // Change l'url sans refresh la page
        window.history.pushState({}, null, '/video/dessousSexy.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/dessousSexy.mp4' && video.currentTime >= 46) {
        this.videoUrl = '/static/videos/aspirine.mp4'
        window.history.pushState({}, null, '/video/aspirine.mp4')
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/dessousCasual.mp4' && video.currentTime >= 46) {
        this.videoUrl = '/static/videos/aspirine.mp4'
        window.history.pushState({}, null, '/video/aspirine.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/aspirine.mp4' && video.currentTime >= 42) {
        this.videoUrl = '/static/videos/aPied.mp4'
        window.history.pushState({}, null, '/video/aPied.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/bombeAuPoivre.mp4' && video.currentTime >= 42) {
        this.videoUrl = '/static/videos/aPied.mp4'
        window.history.pushState({}, null, '/video/aPied.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/enVoiture.mp4' && video.currentTime >= 117) {
        this.videoUrl = '/static/videos/draguerPatron.mp4'
        window.history.pushState({}, null, '/video/draguerPatron.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/aPied.mp4' && video.currentTime >= 153) {
        this.videoUrl = '/static/videos/draguerPatron.mp4'
        window.history.pushState({}, null, '/video/draguerPatron.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/draguerPatron.mp4' && video.currentTime >= 154) {
        this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
        window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/provoquerJeremy.mp4' && video.currentTime >= 170) {
        this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
        window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/aspirinePourAnna.mp4' && video.currentTime >= 68) {
        this.videoUrl = '/static/videos/annaIvreParleSamantha.mp4'
        window.history.pushState({}, null, '/video/annaIvreParleSamantha.mp4')
        /**/
      } else if (this.videoUrl === '/static/videos/aspirinePourLucy.mp4' && video.currentTime >= 66) {

        this.videoUrl = '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4'
        window.history.pushState({}, null, '/video/AnnaSobreParlePatronBureauAvecLucy.mp4')

      } else if (this.videoUrl === '/static/videos/draguerPatron.mp4' && video.currentTime >= 155  ) {

        this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
        window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')

      } else if (this.videoUrl === '/static/videos/draguerPatronSansAspirine.mp4' && video.currentTime >= 155  ) {

        this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
        window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')

      } else if (this.videoUrl === '/static/videos/provoquerJeremy.mp4' && video.currentTime >= 170  ) {

        this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
        window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')

      } else if (this.videoUrl === '/static/videos/draguePatronSansAspirine.mp4' && video.currentTime >= 187) {

        this.videoUrl = '/static/videos/annaSobreParleASamanthaSansLucy.mp4'
        window.history.pushState({}, null, '/video/annaSobreParleASamanthaSansLucy.mp4')

      } else if (this.videoUrl === '/static/videos/provocJeremySansAspirine.mp4' && video.currentTime >= 202) {
        this.videoUrl = '/static/videos/annaSobreParleASamanthaSansLucy.mp4.mp4'
        window.history.pushState({}, null, '/video/annaSobreParleASamanthaSansLucy.mp4.mp4')

      } else if (this.videoUrl === '/static/videos/annaIvreParleSamantha.mp4' && video.currentTime >= 73) {
        this.videoUrl = '/static/videos/gifleSamantha.mp4'
        window.history.pushState({}, null, '/video/gifleSamantha.mp4')
        /**/



      } else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4' && this.bombePoivre==true && video.currentTime >= 123) {
        this.videoUrl = '/static/videos/insultePatronPoivreSansLucy.mp4'
        window.history.pushState({}, null, '/video/insultePatronPoivreSansLucy.mp4')

      }
      else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4' && this.bombePoivre==false && video.currentTime >= 123) {
       this.videoUrl = '/static/videos/bureauPatronInsulteSansBombe.mp4'
       window.history.pushState({}, null, '/video/bureauPatronInsulteSansBombe.mp4')



   } else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4' && this.bombePoivre==true && video.currentTime >= 114) {
       this.videoUrl = '/static/videos/insultePatronPoivreAvecLucy.mp4'
       window.history.pushState({}, null, '/video/insultePatronPoivreAvecLucy.mp4')

     }
     else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4' && this.bombePoivre==false && video.currentTime >= 114) {
      this.videoUrl = '/static/videos/bureauPatronInsulteSansBombe.mp4'
      window.history.pushState({}, null, '/video/bureauPatronInsulteSansBombe.mp4')

    }
    else if (this.videoUrl === '/static/videos/bureauPatronInsulteSansBombe.mp4' && video.currentTime >= 38) {
     this.videoUrl = '/static/videos/patronStatue.mp4'
     window.history.pushState({}, null, '/video/patronStatue.mp4')

   }
   else if (this.videoUrl === '/static/videos/bureauPatronRefuseSansBombe.mp4' && video.currentTime >= 42) {
    this.videoUrl = '/static/videos/patronStatue.mp4'
    window.history.pushState({}, null, '/video/patronStatue.mp4')

  }
  else if (this.videoUrl === '/static/videos/bureauJeremyInsulteEtRefuseSansBombe.mp4' && video.currentTime >= 34) {
   this.videoUrl = '/static/videos/jeremyStatue.mp4'
   window.history.pushState({}, null, '/video/jeremyStatue.mp4')

 }
 else if (this.videoUrl === '/static/videos/rangerTabletteJeremy.mp4' && video.currentTime >= 36) {
  this.videoUrl = '/static/videos/jeremyStatue.mp4'
  window.history.pushState({}, null, '/video/jeremyStatue.mp4')

}
else if (this.videoUrl === '/static/videos/pousseJeremy.mp4'&& this.lucyIvre == true && video.currentTime >= 84) {
 this.videoUrl = '/static/videos/griffe.mp4'
 window.history.pushState({}, null, '/video/griffe.mp4')

}
else if (this.videoUrl === '/static/videos/pousseJeremy.mp4'&& this.lucyIvre == false && video.currentTime >= 84) {
 this.videoUrl = '/static/videos/griffeLucy.mp4'
 window.history.pushState({}, null, '/video/griffeLucy.mp4')

}

else if (this.videoUrl === '/static/videos/gifleSamantha.mp4'&& this.lucyIvre == false && video.currentTime >= 98) {
 this.videoUrl = '/static/videos/griffeLucy.mp4'
 window.history.pushState({}, null, '/video/griffeLucy.mp4')

}
else if (this.videoUrl === '/static/videos/gifleSamantha.mp4'&& this.lucyIvre == true && video.currentTime >= 98) {
 this.videoUrl = '/static/videos/griffe.mp4'
 window.history.pushState({}, null, '/video/griffe.mp4')

}

else if (this.videoUrl === '/static/videos/annaIvreParleAuPatron.mp4'&& this.lucyIvre == true && video.currentTime >= 125) {
 this.videoUrl = '/static/videos/griffe.mp4'
 window.history.pushState({}, null, '/video/griffe.mp4')

}

else if (this.videoUrl === '/static/videos/annaIvreParleAuPatron.mp4'&& this.lucyIvre == false && video.currentTime >= 125) {
 this.videoUrl = '/static/videos/griffeLucy.mp4'
 window.history.pushState({}, null, '/video/griffeLucy.mp4')

}

else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaSansLucy.mp4' && this.bombePoivre == true && video.currentTime >= 102) {
 this.videoUrl = '/static/videos/insulteJeremyPoivreAvecLucy.mp4'
 window.history.pushState({}, null, '/video/insulteJeremyPoivreAvecLucy.mp4')

}
else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaSansLucy.mp4' && this.bombePoivre == false && video.currentTime >= 102) {
 this.videoUrl = '/static/videos/bureauJeremyInsulteEtRefuseSansBombe.mp4'
 window.history.pushState({}, null, '/video/bureauJeremyInsulteEtRefuseSansBombe.mp4')

}

// LA SUITE CE SONT LES CONFITIONS DE FIN FINAL ++ GLITCH
    },
    // Gere les cas où un input est donné par l'utilisateur

    handleKeyboard (e) {
      // variable aspi, si anna prend l'aspirine elle vaut true, false sinon

      // Récupère tous les éléments <video /> dans un tableau et retourne l'élément de la première case de ce tableau
      var video = document.getElementsByTagName('video')[0]
      // Check le src de <video> et deux currentTime qui doivent correspondre pour le premier au début de la phase de choix et pour le dernier à la fin de la vidéo.
      if (this.videoUrl === '/static/videos/debut.mp4' && video.currentTime > 150 && video.currentTime < 175) {
        /**
        DEBUT
        **/
        if (e.keyCode === 71) {
          // Si touche 1 appuyée.
          this.videoUrl = '/static/videos/dessousSexy.mp4'
          window.history.pushState({}, null, '/video/dessousSexy.mp4')
        } else if (e.keyCode === 70) {
          // Si touche 2 appuyée.
          this.videoUrl = '/static/videos/dessousCasual.mp4'
          window.history.pushState({}, null, '/video/dessousCasual.mp4')
        }
        /**/
      } else if (this.videoUrl === '/static/videos/dessousSexy.mp4' && video.currentTime > 23 && video.currentTime < 47) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/bombeAuPoivre.mp4'
          this.aspi = false
          this.bombePoivre = true
          window.history.pushState({}, null, '/video/bombeAuPoivre.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aspirine.mp4'
          this.aspi = true
          window.history.pushState({}, null, '/video/aspirine.mp4')
        }
        /**/
      } else if (this.videoUrl === '/static/videos/dessousCasual.mp4' && video.currentTime > 23 && video.currentTime < 47) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/bombeAuPoivre.mp4'
          this.aspi = false
          this.bombePoivre = true
          window.history.pushState({}, null, '/video/bombeAuPoivre.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aspirine.mp4'
          this.aspi = true
          window.history.pushState({}, null, '/video/aspirine.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/aspirine.mp4' && video.currentTime > 17 && video.currentTime < 42) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/enVoiture.mp4'
          window.history.pushState({}, null, '/video/enVoiture.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aPied.mp4'
          window.history.pushState({}, null, '/video/aPied.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/bombeAuPoivre.mp4' && video.currentTime > 19 && video.currentTime < 42) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/enVoiture.mp4'
          window.history.pushState({}, null, '/video/enVoiture.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aPied.mp4'
          window.history.pushState({}, null, '/video/aPied.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/enVoiture.mp4' && this.aspi==true && video.currentTime > 92 && video.currentTime < 117) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/draguerPatron.mp4'
          window.history.pushState({}, null, '/video/draguerPatron.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/provoquerJeremy.mp4'
          window.history.pushState({}, null, '/video/provoquerJeremy.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/enVoiture.mp4' && this.aspi == false && video.currentTime > 92 && video.currentTime < 117) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/draguePatronSansAspirine.mp4'
          window.history.pushState({}, null, '/video/draguePatronSansAspirine.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/provocJeremySansAspirine.mp4'
          window.history.pushState({}, null, '/video/provocJeremySansAspirine.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/aPied.mp4' && this.aspi == true && video.currentTime > 128 && video.currentTime < 153) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/draguerPatron.mp4'
          window.history.pushState({}, null, '/video/draguerPatron.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/provoquerJeremy.mp4'
          window.history.pushState({}, null, '/video/provoquerJeremy.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/aPied.mp4' && this.aspi == false && video.currentTime > 128 && video.currentTime < 153) {
        /**/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/draguePatronSansAspirine.mp4'
          window.history.pushState({}, null, '/video/draguePatronSansAspirine.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/provocJeremySansAspirine.mp4'
          window.history.pushState({}, null, '/video/provocJeremySansAspirine.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/draguerPatron.mp4' && this.aspi === true && video.currentTime > 130 && video.currentTime < 154) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/aspirinePourLucy.mp4'
          this.ivre = false
          this.lucyIvre = true
          window.history.pushState({}, null, '/video/aspirinePourLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
          this.ivre = true
          this.lucyIvre = false
          window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/draguerPatron.mp4' && this.aspi === false && video.currentTime > 130 && video.currentTime < 154) {
        /**
        /** REMPLACER : ICI ELLE DOIT ALLER PARLER AU PATRON OU SAMANTHA CAR ELLE A PAS D'ASPIRINE
        **/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/aspirinePourLucy.mp4'
          this.ivre = false
          window.history.pushState({}, null, '/video/aspirinePourLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
          this.ivre = true
          window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')
        }
        /**/
        /**/
      } else if (this.videoUrl === '/static/videos/provoquerJeremy.mp4' && this.aspi === true && video.currentTime > 144 && video.currentTime < 170) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/aspirinePourLucy.mp4'
          this.ivre = false
          this.lucyIvre = true
          window.history.pushState({}, null, '/video/aspirinePourLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/aspirinePourAnna.mp4'
          this.ivre = true
          this.lucyIvre = false
          window.history.pushState({}, null, '/video/aspirinePourAnna.mp4')
        }
      } else if (this.videoUrl === '/static/videos/aspirinePourAnna.mp4' && video.currentTime > 43 && video.currentTime < 68) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/annaIvreParleAuPatron.mp4'
          window.history.pushState({}, null, '/video/annaIvreParleAuPatron.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/annaIvreParleSamantha.mp4'
          window.history.pushState({}, null, '/video/annaIvreParleSamantha.mp4')
        }
      } else if (this.videoUrl === '/static/videos/provocJeremySansAspirine.mp4' && this.lucyIvre == true && video.currentTime > 178 && video.currentTime < 202) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4'
          window.history.pushState({}, null, '/video/AnnaSobreParlePatronBureauSansLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/annaSobreParleASamanthaSansLucy.mp4'
          window.history.pushState({}, null, '/video/annaSobreParleASamanthaSansLucy.mp4')
        }
      } else if (this.videoUrl === '/static/videos/provocJeremySansAspirine.mp4' && this.bombePoivre == true && video.currentTime > 178 && video.currentTime < 202) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4'
          window.history.pushState({}, null, '/video/AnnaSobreParlePatronBureauSansLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/annaSobreParleASamanthaSansLucy.mp4'
          window.history.pushState({}, null, '/video/annaSobreParleASamanthaSansLucy.mp4')
        }
      } else if (this.videoUrl === '/static/videos/draguePatronSansAspirine.mp4' && video.currentTime > 163 && video.currentTime < 187) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4'
          window.history.pushState({}, null, '/video/AnnaSobreParlePatronBureauSansLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/annaSobreParleASamanthaSansLucy.mp4'
          window.history.pushState({}, null, '/video/annaSobreParleASamanthaSansLucy.mp4')
        }
      } else if (this.videoUrl === '/static/videos/aspirinePourLucy.mp4' && video.currentTime > 52 && video.currentTime < 66) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4'
          window.history.pushState({}, null, '/video/AnnaSobreParlePatronBureauAvecLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/annaSobreParleASamanthaLucyIvre.mp4'
          window.history.pushState({}, null, '/video/annaSobreParleASamanthaLucyIvre.mp4')
        }



      /* LES DEUX CAS SUIVANTS: BUREAU PATRON AVEC ET SANS LUCY, SANS BOMBE AU POIVRE A FAIRE : AVEC BOMBE*/
      } else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4' && this.aspi==true && video.currentTime > 108 && video.currentTime < 123) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/bureauPatronInsulteSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauPatronInsulteSansBombe.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/bureauPatronRefuseSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauPatronRefuseSansBombe.mp4')
        }
      } else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4' && this.aspi==true && video.currentTime > 99 && video.currentTime < 114) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/bureauPatronInsulteSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauPatronInsulteSansBombe.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/bureauPatronRefuseSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauPatronRefuseSansBombe.mp4')
        }
      }

      else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauSansLucy.mp4' && this.bombePoivre==true && this.lucyIvre == false && video.currentTime > 99 && video.currentTime < 114) {
       /**
       CASUAL
       **/
       if (e.keyCode === 71) {
           this.videoUrl = '/static/videos/insultePatronPoivreAvecLucy.mp4'
         window.history.pushState({}, null, '/video/insultePatronPoivreAvecLucy.mp4')
       } else if (e.keyCode === 70) {
         this.videoUrl = '/static/videos/refusPatronPoivreAvecLucy.mp4'
         window.history.pushState({}, null, '/video/refusPatronPoivreAvecLucy.mp4')
       }
     } else if (this.videoUrl === '/static/videos/AnnaSobreParlePatronBureauAvecLucy.mp4' && this.bombePoivre==true && this.lucyIvre == true && video.currentTime > 108 && video.currentTime < 123) {
       /**
       CASUAL
       **/
       if (e.keyCode === 71) {
           this.videoUrl = '/static/videos/insultePatronPoivreSansLucy.mp4'
         window.history.pushState({}, null, '/video/insultePatronPoivreSansLucy.mp4')
       } else if (e.keyCode === 70) {
         this.videoUrl = '/static/videos/refusPatronPoivreSansLucy.mp4'
         window.history.pushState({}, null, '/video/refusPatronPoivreSansLucy.mp4')
       }
     }










      /* LES DEUX CAS SUIVANTS: BUREAU JEREMY AVEC ET SANS LUCY, SANS BOMBE AU POIVRE A FAIRE : AVEC BOMBE*/

      else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaLucyIvre.mp4' && this.bombePoivre == false &&  video.currentTime > 102 && video.currentTime < 118) {
        /**
        CASUAL
        **/

        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/bureauJeremyInsulteEtRefuseSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauJeremyInsulteEtRefuseSansBombe.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/rangerTabletteJeremy.mp4'
          window.history.pushState({}, null, '/video/rangerTabletteJeremy.mp4')
        }
      }
      else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaSansLucy.mp4' && this.bombePoivre === false && video.currentTime > 87 && video.currentTime < 102) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/bureauJeremyInsulteEtRefuseSansBombe.mp4'
          window.history.pushState({}, null, '/video/bureauJeremyInsulteEtRefuseSansBombe.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/rangerTabletteJeremy.mp4'
          window.history.pushState({}, null, '/video/rangerTabletteJeremy.mp4')
        }
      }
      else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaLucyIvre.mp4' && this.bombePoivre == true &&  video.currentTime > 102 && video.currentTime < 118) {
        /**
        CASUAL
        **/

        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/insulteJeremyPoivreAvecLucy.mp4'
          window.history.pushState({}, null, '/video/insulteJeremyPoivreAvecLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/refusJeremyPoivreAvecLucy.mp4'
          window.history.pushState({}, null, '/video/refusJeremyPoivreAvecLucy.mp4')
        }
      }
      else if (this.videoUrl === '/static/videos/annaSobreParleASamanthaSansLucy.mp4' && this.bombePoivre == true && video.currentTime > 87 && video.currentTime < 102) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/insulteJeremyPoivreSansLucy.mp4'
          window.history.pushState({}, null, '/video/insulteJeremyPoivreSansLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/refusJeremyPoivreSansLucy.mp4'
          window.history.pushState({}, null, '/video/refusJeremyPoivreSansLucy.mp4')
        }
      }
      else if (this.videoUrl === '/static/videos/gifleSamantha.mp4' && this.lucyIvre == true && video.currentTime > 84 && video.currentTime < 99) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/griffe.mp4'
          window.history.pushState({}, null, '/video/griffe.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/cle.mp4'
          window.history.pushState({}, null, '/video/cle.mp4')
        }
      }
      else if (this.videoUrl === '/static/videos/gifleSamantha.mp4' && this.lucyIvre == false && video.currentTime > 84 && video.currentTime < 99) {
        /**
        CASUAL
        **/
        if (e.keyCode === 71) {
            this.videoUrl = '/static/videos/griffeLucy.mp4'
          window.history.pushState({}, null, '/video/griffeLucy.mp4')
        } else if (e.keyCode === 70) {
          this.videoUrl = '/static/videos/cleLucy.mp4'
          window.history.pushState({}, null, '/video/cleLucy.mp4')
        }
      }












   /* LES FINS AVEC JEREMY */

   else if (this.videoUrl === '/static/videos/rangerTabletteJeremy.mp4' && video.currentTime > 21 && video.currentTime < 36) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/jeremyCendrier.mp4'
       window.history.pushState({}, null, '/video/jeremyCendrier.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/jeremyStatue.mp4'
       window.history.pushState({}, null, '/video/jeremyStatue.mp4')
     }
   }else if (this.videoUrl === '/static/videos/bureauJeremyInsulteEtRefuseSansBombe.mp4' && video.currentTime > 19 && video.currentTime < 34) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/jeremyCendrier.mp4'
       window.history.pushState({}, null, '/video/jeremyCendrier.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/jeremyStatue.mp4'
       window.history.pushState({}, null, '/video/jeremyStatue.mp4')
     }
   }




   /* LES FINS AVEC LE PATRON */
   else if (this.videoUrl === '/static/videos/bureauPatronInsulteSansBombe.mp4' && this.bombeAuPoivre === false && video.currentTime > 23 && video.currentTime < 38) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/patronCendrier.mp4'
       window.history.pushState({}, null, '/video/jeremyCendrier.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/patronStatue.mp4'
       window.history.pushState({}, null, '/video/jeremyStatue.mp4')
     }
   }

   else if (this.videoUrl === '/static/videos/bureauPatronRefuseSansBombe.mp4' && video.currentTime > 27 && video.currentTime < 42) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/patronCendrier.mp4'
       window.history.pushState({}, null, '/video/jeremyCendrier.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/patronStatue.mp4'
       window.history.pushState({}, null, '/video/jeremyStatue.mp4')
     }
   }





      else if (this.videoUrl === '/static/videos/annaIvreParleSamantha.mp4'&& video.currentTime > 58 && video.currentTime < 73) {
       /**
       CASUAL
       **/
       if (e.keyCode === 71) {
           this.videoUrl = '/static/videos/pousseJeremy.mp4'
         window.history.pushState({}, null, '/video/pousseJeremy.mp4')
       } else if (e.keyCode === 70) {
         this.videoUrl = '/static/videos/gifleSamantha.mp4'
         window.history.pushState({}, null, '/video/gifleSamantha.mp4')
       }
     }

     else if (this.videoUrl === '/static/videos/annaIvreParleAuPatron.mp4' && this.lucyIvre == false && video.currentTime > 109 && video.currentTime < 125) {
      /**
      CASUAL
      **/
      if (e.keyCode === 71) {
          this.videoUrl = '/static/videos/griffeLucy.mp4'
        window.history.pushState({}, null, '/video/griffeLucy.mp4')
      } else if (e.keyCode === 70) {
        this.videoUrl = '/static/videos/cleLucy.mp4'
        window.history.pushState({}, null, '/video/cleLucy.mp4')
      }
    }

    else if (this.videoUrl === '/static/videos/annaIvreParleAuPatron.mp4' && this.lucyIvre == true && video.currentTime > 109 && video.currentTime < 125) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/griffe.mp4'
       window.history.pushState({}, null, '/video/griffe.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/cle.mp4'
       window.history.pushState({}, null, '/video/cle.mp4')
     }
   }
    else if (this.videoUrl === '/static/videos/pousseJeremy.mp4' && this.lucyIvre == false && video.currentTime > 69 && video.currentTime < 84) {
     /**
     CASUAL
     **/
     if (e.keyCode === 71) {
         this.videoUrl = '/static/videos/griffeLucy.mp4'
       window.history.pushState({}, null, '/video/griffeLucy.mp4')
     } else if (e.keyCode === 70) {
       this.videoUrl = '/static/videos/cleLucy.mp4'
       window.history.pushState({}, null, '/video/cleLucy.mp4')
     }
   }
   else if (this.videoUrl === '/static/videos/pousseJeremy.mp4' && this.lucyIvre == true && video.currentTime > 69 && video.currentTime < 84) {
    /**
    CASUAL
    **/
    if (e.keyCode === 71) {
        this.videoUrl = '/static/videos/griffe.mp4'
      window.history.pushState({}, null, '/video/griffe.mp4')
    } else if (e.keyCode === 70) {
      this.videoUrl = '/static/videos/cle.mp4'
      window.history.pushState({}, null, '/video/cle.mp4')
    }
  }

    }
  },
  created () {
    // Initialise l'eventlistener lorsqu'on relâche un bouton. Quand c'est le cas, lance la fonction handleKeyboard.
    window.addEventListener('keyup', this.handleKeyboard, false)

    // Gère le src video à la création de la page. récupère l'url et ne conserve que les caractères qui se trouvent après le dernier /
    // exemple : google.com/lol/mdr devient -> mdr
    // Du coup ça permet de charger la vidéo qu'on souhaite à partir de la barre d'adresse.
    var path = window.location.pathname.split('/').pop()
    this.videoUrl = '/static/videos/' + path
  },
  mounted () {
    // Lance à interval régulier la fonction handleTimer (ici toutes les secondes mais durée à sûrement reconsidérer).
    setInterval(() => { this.handleDefaultChoice() }, 1000)
  },
  destroyed () {
    // Détruit l'eventlistener à la fermeture de la page / Quand le composant video est détruit
    window.removeEventListener('keyup', this.handleKeyboard, false)
  }
}
</script>

<style>
  .video {
    margin: 0;
    padding: 0;
    width: 100%;
    height:100%;
    overflow:hidden;
    background-color: #000;
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: auto;
    height: 100vh;
    overflow: hidden;
  }
</style>
