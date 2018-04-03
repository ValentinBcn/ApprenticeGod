
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/video/decompte.mp4', component: Video },

    { path: '/video/debut.mp4', component: Video },

    { path: '/video/dessousSexy.mp4', component: Video },
    { path: '/video/dessousCasual.mp4', component: Video },

    { path: '/video/aspirine.mp4', component: Video },
    { path: '/video/bombeAuPoivre.mp4', component: Video },

    { path: '/video/aPied.mp4', component: Video },
    { path: '/video/enVoiture.mp4', component: Video },

    { path: '/video/aspirinePourAnna.mp4', component: Video },
    { path: '/video/aspirinePourLucy.mp4', component: Video },

    { path: '/video/draguerPatron.mp4', component: Video },
    { path: '/video/provoquerJeremy.mp4', component: Video },

    { path: '/video/draguePatronSansAspirine.mp4', component: Video },
    { path: '/video/provocJeremySansAspirine.mp4', component: Video },

    { path: '/video/annaIvreParleSamantha.mp4', component: Video },
    { path: '/video/AnnaSobreParlePatronBureauAvecLucy.mp4', component: Video },

    { path: '/video/bureauPatronInsulteSansBombe.mp4', component: Video },
    { path: '/video/bureauPatronRefuseSansBombe.mp4', component: Video },

    { path: '/video/bureauJeremyInsulteEtRefuseSansBombe.mp4', component: Video },

    { path: '/video/rangerTabletteJeremy.mp4', component: Video },
    { path: '/video/pousseJeremy.mp4', component: Video },

    { path: '/video/gifleSamantha.mp4', component: Video },

    { path: '/video/griffeLucy.mp4', component: Video },
    { path: '/video/cleLucy.mp4', component: Video },

    { path: '/video/cle.mp4', component: Video },
    { path: '/video/griffe.mp4', component: Video },

    { path: '/video/annaIvreParleAuPatron.mp4', component: Video },
    { path: '/video/annaIvreParleSamantha.mp4', component: Video },

    { path: '/video/jeremyCendrier.mp4', component: Video },
    { path: '/video/jeremyStatue.mp4', component: Video },

    { path: '/video/patronCendrier.mp4', component: Video },
    { path: '/video/patronStatue.mp4', component: Video },

    { path: '/video/annaSobreParleASamanthaSansLucy.mp4', component: Video },
    { path: '/video/AnnaSobreParlePatronBureauSansLucy.mp4', component: Video },

    { path: '/video/bureauPatronInsulteSansBombe.mp4', component: Video },

    { path: '/video/insulteJeremyPoivreAvecLucy.mp4', component: Video },
    { path: '/video/refusJeremyPoivreAvecLucy.mp4', component: Video },

    { path: '/video/insultePatronPoivreAvecLucy.mp4', component: Video },
    { path: '/video/insultePatronPoivreSansLucy.mp4', component: Video },

    { path: '/video/refusPatronPoivreSansLucy.mp4', component: Video },
    { path: '/video/refusPatronPoivreAvecLucy.mp4', component: Video },

    { path: '/video/insulteJeremyPoivreSansLucy.mp4', component: Video },
    { path: '/video/refusJeremyPoivreSansLucy.mp4', component: Video },

    { path: '/video/gifleSamantha.mp4', component: Video },
    { path: '/video', redirect: '/video/debut.mp4' }

  ]
})
