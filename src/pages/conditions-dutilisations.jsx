import Container from '@/components/globalComponents/Container'
import Link from 'next/link'
import React from 'react'

const ConditionsDutilisations = () => {
  return (
    <>
      <div className='bg-main pt-20'></div>
        <Container>
          <div className="flex flex-col pb-14 pt-14">
            <div className="w-full">
              <h1 className="text-4xl font-bold uppercase mb-8">Conditions d&apos;utilisations</h1>
              <p className=" text-gray-600 mt-2">
                Le site <strong className='text-blue-900 '><strong className='text-blue-900 '>www.kirotravel.com</strong> </strong>  est la propriété exclusive de KIRO LIMO, qui l’édite.
              </p>
              <p className=" text-gray-600 mt-2 "><strong>SASU</strong> au capital de 1000 € – Tél 0644915310</p>
              <p className=" text-gray-600 mt-2 ">Immatriculée au Registre du Commerce et des Sociétés de Bourg-En-Bresse sous le numéro 85153644100013</p>
              <p className=" text-gray-600 mt-2 "><strong>Numéro TVA intracommunautaire :</strong> FR69851536441</p>
              <p className=" text-gray-600 mt-2 "><strong>Adresse :</strong> 01630 Saint Genis Pouilly, France</p>
              <p className=" text-gray-600 mt-2 "><strong>Téléphone :</strong> 0644915310</p>
              <p className=" text-gray-600 mt-2 "><strong>Courriel  :</strong> contact@kirolimo.fr</p>
              <p className=" text-gray-600 mt-2 "><strong>Contactez le responsable de la publication  :</strong> contact@kirolimo.fr</p>
              <p className=" text-gray-600 mt-2 "><strong>Licences de VTC :</strong> Communiqué sur demande.</p>

              <div className='mt-11'>
                <h2 className='text-2xl font-bold pb-2'>Réglementation RGPD et protection des données :</h2>
                <p className='text-gray-600'>Conformément à la législation, nous vous invitons à consulter la page suivante ayant attraits à l’exploitation et à la protection de vos données :</p>
                <button className='bg-main text-white px-4 py-2 rounded-md my-5'>
                  <Link href='/politique-de-confidentialite'>
                    Politique de confidentialité  
                  </Link>  
                </button>
                <p className='text-gray-600'>Vous pouvez exercer votre droit d’accès et de modification sur ces données, en envoyant un courrier électronique à l’adresse suivante : contact@kirolimo.fr</p>
              </div>

              <div className='mt-11'>
                <h2 className='text-2xl font-bold pb-2'>Description des services fournis :</h2>
                <p className='text-gray-600'>Le site www.kirolimovtc.com a pour objet de fournir une information concernant l’ensemble des activités de la société.</p>
                <p className='text-gray-600'>Le propriétaire du site s’efforce de fournir sur le site <strong className='text-blue-900 '>www.kirotravel.com</strong>  des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                <p className='text-gray-600'>Toutes les informations proposées sur le site <strong className='text-blue-900 '>www.kirotravel.com</strong>  sont données à titre indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
              </div>

              <div className='mt-11'>
                <h2 className='text-2xl font-bold pb-2'>Propriété intellectuelle et contrefaçons :</h2>
                <p className='text-gray-600'>Le propriétaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels…</p>
                <p className='text-gray-600'>Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable à l’email : contact@kirolimo.fr .</p>
                <p className='text-gray-600'>Toute exploitation non autorisée du site ou de l’un quelconque de ces éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
              </div>

              <div className='mt-11'>
                <h2 className='text-2xl font-bold pb-2'>Liens hypertextes et cookies :</h2>
                <p className='text-gray-600 py-2'>Le site <strong className='text-blue-900 '>www.kirotravel.com</strong>  contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations …) mis en place avec l’autorisation de le propriétaire du site . Cependant, le propriétaire du site n’a pas la possibilité de vérifier le contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quant aux risques éventuels de contenus illicites.</p>
                <p className='text-gray-600 py-2'>L’utilisateur est informé que lors de ses visites sur le site <strong className='text-blue-900 '>www.kirotravel.com</strong> , un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
                <p className='text-gray-600'>Le paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de refuser de la manière décrite à l’adresse suivante : www.cnil.fr</p>
                <p className='text-gray-600'>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
                <p className='text-gray-600'>Sous Internet Explorer : onglet outil / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.Sous Netscape : onglet édition / préférences. Cliquez sur Avancées et choisissez Désactiver les cookies. Validez sur Ok.</p>
              </div>

              <div className='mt-11'>
                <h2 className='text-2xl font-bold pb-2'>Protection et gestion des données personnelles :</h2>
                <p className='text-gray-600 py-2'>Utilisateur : Internaute se connectant, utilisant le site susnommé : <strong className='text-blue-900 '>www.kirotravel.com</strong>  En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
                <p className='text-gray-600 py-2'>Sur le site <strong className='text-blue-900 '>www.kirotravel.com</strong> , le propriétaire du site ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site <strong className='text-blue-900 '>www.kirotravel.com</strong> . L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site <strong className='text-blue-900 '>www.kirotravel.com</strong>  l’obligation ou non de fournir ces informations. Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant. Pour l’exercer, adressez votre demande à <strong className='text-blue-900 '>www.kirotravel.com</strong>  par email : contact@kirolimo.fr ou en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
                <p className='text-gray-600 py-2'>Aucune information personnelle de l’utilisateur du site <strong className='text-blue-900 '>www.kirotravel.com</strong>  n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat du site <strong className='text-blue-900 '>www.kirotravel.com</strong>  à le propriétaire du site et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l’utilisateur du site <strong className='text-blue-900 '>www.kirotravel.com</strong>  Le site <strong className='text-blue-900 '>www.kirotravel.com</strong>  est déclaré à la CNIL sous le numéro Aucune déclaration CNIL car pas de recueil de données personnelles.</p>
              </div>

            </div>




          </div>

        
        </Container>
      </>
  )
}

export default ConditionsDutilisations