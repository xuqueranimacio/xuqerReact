import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// INDEX
import { Index } from './Index';

// CAMPAMENTS
import { Campaments } from './pages/campaments/Campaments';
import { CEstiu } from './pages/campaments/CEstiu';
import { CAdults } from './pages/campaments/CAdults';
import { CNadal } from './pages/campaments/CNadal';
import { CPasqua } from './pages/campaments/CPasqua';
import { CMulti } from './pages/campaments/CMulti';
import { CEsportius } from './pages/campaments/CEsportius';

// ESCOLES DE VACANCES
import { Escoles } from './pages/escoles/Escoles';
import { EEstiu } from './pages/escoles/EEstiu';
import { ENadal } from './pages/escoles/ENadal';
import { EPasqua } from './pages/escoles/EPasqua';

// EXTRAESCOLARS
import { Extraescolars } from './pages/extraescolars/Extraescolars';
import { EDiver } from './pages/extraescolars/EDiver';
import { ELego } from './pages/extraescolars/ELego';
import { EMini } from './pages/extraescolars/EMini';
import { EImag } from './pages/extraescolars/EImag';
import { EPati } from './pages/extraescolars/EPati';

// ANIMACIONS
import { Animacions } from './pages/animacions/Animacions';
import { AAniv } from './pages/animacions/AAniv';
import { AExcur } from './pages/animacions/AExcur';
import { AGim } from './pages/animacions/AGim';
import { AHall } from './pages/animacions/AHall';
import { AMusic } from './pages/animacions/AMusic';
import { AScap } from './pages/animacions/AScap';
import { AJocs } from './pages/animacions/AJocs';
import { ATall } from './pages/animacions/ATall';
import { AJFusta } from './pages/animacions/AJFusta';
import { ACom } from './pages/animacions/ACom';

//NOSALTRES
import { Nosaltres } from './pages/nosaltres/Nosaltres';
import { QuiSom } from './pages/nosaltres/QuiSom';

// CONTACTE
import { Contacte } from './pages/Contacte';
import { Equip } from './pages/nosaltres/Equip';

// NOT FOUND
import { NotFound } from './pages/NotFount';
import { Metodologia } from './pages/nosaltres/Metodologia';
import { Valors } from './pages/nosaltres/Valors';




export const RoutesComp = () => {

    return(
        <Router>
            <Routes>
                {/* INDEX */}
                <Route path="/" element={<Index />} />

                {/* CAMPAMENTS */}
                <Route path="/campaments" element={<Campaments />} />
                <Route path="/campaments/estiu" element={<CEstiu />} />
                <Route path="/campaments/nadal" element={<CNadal />} />
                <Route path="/campaments/pasqua" element={<CPasqua />} />
                <Route path="/campaments/adults" element={<CAdults />} />
                <Route path="/campaments/multiaventura" element={<CMulti />} />
                <Route path="/campaments/esportius" element={<CEsportius />} />

                {/* ESCOLES DE VACANCES */}
                <Route path="/escoles-de-vacances" element={<Escoles />} />
                <Route path="/escoles-de-vacances/estiu" element={<EEstiu />} />
                <Route path="/escoles-de-vacances/nadal" element={<ENadal />} />
                <Route path="/escoles-de-vacances/pasqua" element={<EPasqua />} />

                {/* ANIMACIONS */}
                <Route path="/animacions" element={<Animacions />} />
                <Route path="/animacions/excursions" element={<AExcur />} />
                <Route path="/animacions/aniversaris" element={<AAniv />} />
                <Route path="/animacions/gimcanes" element={<AGim />} />
                <Route path="/animacions/halloween" element={<AHall />} />
                <Route path="/animacions/musical" element={<AMusic />} />
                <Route path="/animacions/scape-room" element={<AScap />} />
                <Route path="/animacions/jocs-de-fusta" element={<AJFusta />} />
                <Route path="/animacions/jocs-populars" element={<AJocs />} />
                <Route path="/animacions/tallers" element={<ATall />} />
                <Route path="/animacions/comunions" element={<ACom />} />

                {/* EXTRAESCOLARS */}
                <Route path="/extraescolars" element={<Extraescolars />} />
                <Route path="/extraescolars/diverciencia" element={<EDiver />} />
                <Route path="/extraescolars/legoblocks" element={<ELego />} />
                <Route path="/extraescolars/minixef" element={<EMini />} />
                <Route path="/extraescolars/imaginart" element={<EImag />} />
                <Route path="/extraescolars/balls-urbans" element={<EDiver />} />
                <Route path="/extraescolars/patinatge" element={<EPati />} />

                {/* NOSALTRES */}
                <Route path="/nosaltres" element={<Nosaltres />} />
                <Route path="/nosaltres/qui-som" element={<QuiSom />} />
                <Route path="/nosaltres/metodologia" element={<Metodologia />} />
                <Route path="/nosaltres/valors" element={<Valors />} />
                <Route path="/nosaltres/equip" element={<Equip />} />
                <Route path="/nosaltres/treballa-amb-nosaltres" element={<Nosaltres />} />

                {/* CONTACTE */}
                <Route path="/contacte" element={<Contacte />} />

                {/* NOT FOUND */}
                <Route path="*" element={<NotFound />} />


            </Routes>
        </Router>
    )

}