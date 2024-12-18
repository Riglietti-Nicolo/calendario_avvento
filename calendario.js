function getQuery(oggetto) {
    return document.querySelector(oggetto);
}

// funzione per creare elementi HTML
function createElement(obj) {
    return document.createElement(obj);
}

// funzione per prendere elementi da classe
function getElementsByClass(classe) {
    return document.getElementsByClassName(classe);
}

function nCaselle(){
    let cell = getElementsByClass('casella');

    for(let i = 1; i < cell.length + 1; i++){
        cell[i - 1].innerText = i;
    }
}

// assegna un id univoco alle caselle id: giorno - mese - <anno_attuale>
function id(){
    let anno = new Date().getFullYear();

    let caselle = getElementsByClass("casella")

    Array.from(caselle).forEach((casella, index) => {
        let data = new Date(anno, 11, index + 1);
        let giornoId = data.getDate();
        let mese = data.getMonth();
        let annoCorrente = data.getFullYear();
        
        casella.id = `${giornoId}-${mese}-${annoCorrente}`;

        casella.addEventListener("click", function(){            
            checkDay(casella, giornoId);
        });
    });
}

// controlla il giorno attuale con la casella cliccata
function checkDay(casella, giornoId){
    let nuvoletta = getQuery('.nuvoletta');
    let oggi = new Date();
    let giorno = oggi.getDate();
    let mese = oggi.getMonth();
    let anno = oggi.getFullYear();

    let dataCorrente = `${giorno}-${mese}-${anno}`;

    if(dataCorrente === casella.id){
        nuvoletta.style.display = 'none';
        downloadIso(casella, giornoId);
        showMessage('Cosa ci sarà?');

    }else{
        showMessage(`Oggi non è il ${casella.id}`);
    }
}

function showMessage(message) {
    let nuvoletta = getQuery('.nuvoletta');
    let testo = getQuery('.nuvoletta > p');

    nuvoletta.style.display = 'flex';
    testo.innerText = message;
}

function downloadIso(casella, giornoId){
    let iso = ["https://it.mirrors.cicku.me/archlinux/iso/2024.12.01/archlinux-2024.12.01-x86_64.iso", "https://www.ubuntu-it.org/download/grazie?release=latest&arch=amd64&version=desktop", "https://www.ubuntu-it.org/download/grazie?release=latest&arch=amd64&version=desktop",
        "https://linuxmint.mirror.garr.it/linuxmint/iso/stable/22/linuxmint-22-cinnamon-64bit.iso", "https://download.fedoraproject.org/pub/fedora/linux/releases/41/Silverblue/x86_64/iso/Fedora-Silverblue-ostree-x86_64-41-1.4.iso", "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.8.0-amd64-netinst.iso",
        "https://cdimage.kali.org/kali-2024.4/kali-linux-2024.4-installer-amd64.iso", "https://zorin.com/os/download/17/core/", "https://iso.builds.garudalinux.org/iso/latest/garuda/dr460nized/latest.iso?r2=1",
        "https://iso.pop-os.org/22.04/amd64/intel/48/pop-os_22.04_amd64_intel_48.iso", "https://distfiles.gentoo.org/releases/amd64/autobuilds/20241215T164830Z/install-amd64-minimal-20241215T164830Z.iso", "https://mirrors.slackware.com/slackware/slackware-iso/slackware64-15.0-iso/slackware64-15.0-install-dvd.iso",
        "https://download.manjaro.org/xfce/24.2.1/manjaro-xfce-24.2.1-241216-linux612.iso", "https://cdimage.ubuntu.com/kubuntu/releases/24.10/release/kubuntu-24.10-desktop-amd64.iso", "https://mirror.us.leaseweb.net/ubuntu-cdimage/xubuntu/releases/24.04/release/xubuntu-24.04.1-desktop-amd64.iso",
        "https://mirrors.centos.org/mirrorlist?path=/10-stream/BaseOS/x86_64/iso/CentOS-Stream-10-latest-x86_64-dvd1.iso&redirect=1&protocol=https", "https://downloads.getsol.us/isos/2024-10-14/Solus-Budgie-Release-2024-10-14.iso", "https://ams3.dl.elementary.io/download/MTczNDU0MjM2Nw==/elementaryos-8.0-stable.20241122rc.iso",
        "https://cdimage.ubuntu.com/lubuntu/releases/24.04.1/release/lubuntu-24.04.1-desktop-amd64.iso", "https://download.opensuse.org/tumbleweed/iso/openSUSE-Tumbleweed-DVD-x86_64-Current.iso", "https://deb.parrot.sh/parrot/iso/6.2/Parrot-home-6.2_amd64.iso",
        "https://dl-cdn.alpinelinux.org/alpine/v3.21/releases/x86_64/alpine-standard-3.21.0-x86_64.iso", "https://repo-default.voidlinux.org/live/current/void-live-x86_64-20240314-xfce.iso", "https://distro.ibiblio.org/puppylinux/puppy-bookwormpup/BookwormPup64/10.0.8/BookwormPup64_10.0.8.iso", 
        "https://channels.nixos.org/nixos-24.11/latest-nixos-gnome-x86_64-linux.iso", "https://download.artixlinux.org/iso/artix-base-dinit-20240823-x86_64.iso"
    ];
    
    casella.addEventListener( "click", () =>{
        window.location.href = iso[giornoId];
    });
}

function main(){

    nCaselle();
    id();
}

main();
