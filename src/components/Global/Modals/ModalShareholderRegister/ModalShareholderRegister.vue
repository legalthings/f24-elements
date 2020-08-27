<template>
    <UiModal @close="$parent.close()">
        <template #header>
            <h3>
                {{ $t('ORGANIZATION.DIGITAL_SHAREHOLDER_REGISTER') }}
            </h3>
        </template>
        <div
            slot="content"
            class="document-selector"
        >
            <div v-if="$i18n.locale === 'nl'">
                <h2>
                    Het digitaal aandeelhoudersregister
                </h2>

                <p>
                    Welkom bij het digitaal aandeelhoudersregister van jouw BV. Het aandeelhoudersregister is het
                    belangrijkste document van de BV. In het aandeelhoudersregister worden alle wijzigingen gedurende de
                    levenscyclus van de BV opgenomen. Tot voor kort was het aandeelhoudersregister een onhandig hard
                    copy
                    boekje dat bij de meeste ondernemers wel eens kwijtraakte of verloren ging bij een verhuizing. Om
                    het
                    ondernemen nog gebruiksvriendelijker te maken heeft Firm24 een uniek digitaal aandeelhoudersregister
                    ontwikkeld, speciaal voor jou!
                </p>
                <p>
                    Wat is het digitaal aandeelhoudersregister?
                    Het digitaal aandeelhoudersregister werkt hetzelfde als het papieren document, echter is alles
                    online
                    opgeslagen en wordt deze automatisch geupdate. Het register is enkel toegankelijk voor de oprichters
                    en
                    slechts de notaris kan, indien een wijziging is aangevraagd, een nieuwe gebeurtenis toevoegen en
                    updaten.
                </p>
                <p>
                    Waarom is het digitaal aandeelhoudersregister gebouwd?
                    Al sinds 2011 ligt een plan bij de overheid om een centraal digitaal aandeelhoudersregister in te
                    voeren. Tot op heden is dit plan niet uitgevoerd en is het zelfs door de regering in de ‘ijskast’
                    gezet
                    en dat terwijl een digitaal aandeelhoudersregister voor de ondernemer, adviseur en notaris
                    aanzienlijk
                    prettiger is dan het huidige ‘hard copy boekje’. Het digitaal aandeelhoudersregister is namelijk de
                    kern
                    van jouw BV. Vanuit dit dashboard manage je namelijk eenvoudig de gehele onderneming. Nooit meer
                    ruzie
                    met de notaris omdat je het boekje kwijt bent, maar juist snellere processen omdat alles centraal is
                    geregeld.
                </p>
                <p>
                    Voor wie is het digitaal aandeelhoudersregister?
                    Voor elke ondernemer die zijn BV opricht via Firm24.
                </p>
                <p>
                    Wat kost het digitaal aandeelhoudersregister?
                    Het digitaal aandeelhoudersregister is volledig gratis.
                </p>
                <p>
                    Krijg ik nog een hard copy boekje of een PDF versie?
                    Nee, je hebt deze hard copy niet meer nodig. Je hebt nu een digitale weergave van de aandeelhouders
                    in
                    de BV. Het register vertegenwoordigt altijd de laatste stand van zaken. Je kunt je
                    aandeelhoudersregister eenvoudig delen met je accountant, de bank, de notaris of een andere partij
                    die
                    inzage nodig heeft. Je kunt altijd in het overzicht de toegang verlenen of weer intrekken. Dit
                    aandeelhoudersregister voldoet aan de wettelijke vereisten en vervangt de hard copy volledig.
                </p>
                <p>
                    Heb je vragen over het digitaal aandeelhoudersregister, stuur dan een e-mail naar support@firm24.com
                    en
                    we reageren zo snel mogelijk.
                </p>
            </div>
            <div v-else>
                <h2>
                    The digital register of shareholders
                </h2>

                <p>
                    Welcome to the digital shareholders register of your BV. The register of shareholders is the most
                    important document of the BV. This register records all changes of shareholders during the life
                    cycle of
                    the BV. Until recently, the shareholders register was an awkward hard copy booklet that most
                    entrepreneurs lost e.g. during a relocation. To make doing business even more user-friendly, Firm24
                    has
                    developed a unique digital shareholders register, especially for you!
                </p>

                <p>
                    What is the digital shareholders register?
                    The digital register works the same as it’s paper version, however, everything is stored online and
                    updated automatically. The register is only accessible to the founders of the BV and only the notary
                    can, if a change is requested, add and update a new event.
                </p>

                <p>
                    Why did we build the digital register of shareholders?
                    Since 2011 the government has plans to introduce a central, digital register of shareholders. To
                    date,
                    those plans have not been implemented and are put on hold by the government, even though for the
                    entrepreneur, his advisor and the civil-law notary a digital register of shareholders is more
                    pleasant
                    to work with than the current hard copy booklet. It's important that the register is nice to work
                    with,
                    after all the digital register of shareholders is the core of your BV. From your new dashboard you
                    can
                    easily manage the entire company. No more arguments with the civil-law notary because you have lost
                    the
                    booklet, but a faster process because everything is arranged centrally and online.
                </p>

                <p>
                    For whom is the digital register of shareholders?
                    For every entrepreneur who has found his BV through Firm24.
                </p>

                <p>
                    How much does the digital shareholders register cost?
                    The digital register of shareholders is completely free of charge.
                </p>

                <p>
                    Will I get a hard copy booklet or a PDF version?
                    No, you don't need this hard copy anymore. You now have a digital representation of the shareholders
                    in
                    the BV. Your digital shareholders register always represents the latest state of affairs. You can
                    easily
                    share your register with your accountant, the bank, the civil-law notary or any other party who
                    needs to
                    inspect it. You can always grant or revoke access to the register. This shareholder register meets
                    the
                    statutory requirements and replaces the hard copy in full.
                </p>

                <p>
                    If you have any questions about the digital shareholders register, please send an e-mail to
                    support@firm24.com and we will respond as soon as possible.
                </p>
            </div>
            <div class="buttons">
                <b-button
                    type="is-primary"
                    rounded
                    outlined
                    @click="$parent.close()"
                >
                    {{ $i18n.t('ORGANIZATION_NOTIFICATION.CLOSE') }}
                </b-button>
            </div>
        </div>
    </UiModal>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import UiModal from '@/components/Global/Modals/UiModal/UiModal.vue';

    @Component({
        components: { UiModal }
    })
    export default class ModalShareholderRegister extends Vue {
    }
</script>

<style lang="scss" scoped>
    @import '~css/_imports';

    p {
        margin: 2 * $margin-default 0;
    }

    .buttons {
        justify-content: flex-end;
    }
</style>
