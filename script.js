/* ========================================
   ZahnSchutzPlus – Lead Generation Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

                            // ---- Navbar scroll effect ----
                            const navbar = document.getElementById('navbar');
     const floatingCta = document.getElementById('floatingCta');
     let lastScroll = 0;

                            window.addEventListener('scroll', () => {
                                   const currentScroll = window.pageYOffset;

                                                        // Navbar shadow
                                                        navbar.classList.toggle('scrolled', currentScroll > 20);

                                                        // Floating CTA visibility (mobile)
                                                        if (floatingCta) {h
                                                                 floatingCta.classList.toggle('visible', currentScroll > 600);
                                                        }

                                                        lastScroll = currentScroll;
                            }, { passive: true });


                            // ---- Lead Form Handling ----
                            const form = document.getElementById('leadForm');
     const submitBtn = document.getElementById('submitBtn');
     const formSuccess = document.getElementById('formSuccess');

                            if (form) {
                                   form.addEventListener('submit', async (e) => {
                                            e.preventDefault();

                                                               const name = document.getElementById('name').value.trim();
                                            const telefon = document.getElementById('telefon').value.trim();

                                                               // Basic validation
                                                               if (!name || name.length < 2) {
                                                                          shakeInput(document.getElementById('name').closest('.input-wrap'));
                                                                          return;
                                                               }
                                            if (!telefon || telefon.length < 6) {
                                                       shakeInput(document.getElementById('telefon').closest('.input-wrap'));
                                                       return;
                                            }

                                                               // Show loading
                                                               submitBtn.querySelector('.btn-text').style.display = 'none';
                                            submitBtn.querySelector('.btn-loader').style.display = 'flex';
                                            submitBtn.disabled = true;

                                                               try {
                                                                          // === FORMSUBMIT.CO – Sendet Leads per E-Mail an telis@sundsconnect.de ===
                                              const response = await fetch('https://formsubmit.co/ajax/telis@sundsconnect.de', {
                                                           method: 'POST',
                                                           headers: {
                                                                          'Content-Type': 'application/json',
                                                                          'Accept': 'application/json'
                                                           },
                                                           body: JSON.stringify({
                                                                          name: name,
                                                                          telefon: telefon,
                                                                          _subject: 'Neuer Zahnzusatz-Lead: ' + name,
                                                                          source: 'ZahnSchutzPlus Landing Page',
                                                                          timestamp: new Date().toISOString()
                                                           })
                                              });

                                              if (!response.ok) {
                                                           throw new Error('Formular konnte nicht gesendet werden');
                                              }

                                              // Track conversion (Meta Pixel)
                                              if (typeof fbq !== 'undefined') {
                                                           fbq('track', 'Lead', {
                                                                          content_name: 'Zahnzusatzversicherung',
                                                                          value: 3.28,
                                                                          currency: 'EUR'
                                                           });
                                              }

                                              // Track conversion (Google Ads)
                                              if (typeof gtag !== 'undefined') {
                                                           gtag('event', 'conversion', {
                                                                          'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYY'
                                                           });
                                              }

                                              // Show success
                                              form.style.display = 'none';
                                                                          formSuccess.style.display = 'block';
                                                                          formSuccess.style.animation = 'fadeInUp .5s ease-out';

                                              // Store lead locally (backup)
                                              try {
                                                           const leads = JSON.parse(localStorage.getItem('zzv_leads') || '[]');
                                                           leads.push({ name, telefon, date: new Date().toISOString() });
                                                           localStorage.setItem('zzv_leads', JSON.stringify(leads));
                                              } catch(e) {}

                                                               } catch (error) {
                                                                          console.error('Form submission error:', error);
                                                                          // Reset button on error
                                              submitBtn.querySelector('.btn-text').style.display = '';
                                                                          submitBtn.querySelector('.btn-loader').style.display = 'none';
                                                                          submitBtn.disabled = false;

                                              alert('Es gab einen Fehler. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.');
                                                               }
                                   });
                            }

                            function shakeInput(el) {
                                   el.style.borderColor = '#ef4444';
                                   el.style.animation = 'shake .4s ease-out';
                                   setTimeout(() => {
                                            el.style.borderColor = '';
                                            el.style.animation = '';
                                   }, 500);
                            }

                            // Shake animation via CSS injection
                            const shakeStyle = document.createElement('style');
     shakeStyle.textContent = `
         @keyframes shake {
               0%, 100% { transform: translateX(0); }
                     25% { transform: translateX(-8px); }
                           50% { transform: translateX(8px); }
                                 75% { transform: translateX(-4px); }
                                     }
                                       `;
     document.head.appendChild(shakeStyle);


                            // ---- FAQ Accordion ----
                            document.querySelectorAll('.faq-question').forEach(button => {
                                   button.addEventListener('click', () => {
                                            const item = button.closest('.faq-item');
                                            const answer = item.querySelector('.faq-answer');
                                            const isActive = item.classList.contains('active');

                                                                 // Close all
                                                                 document.querySelectorAll('.faq-item').forEach(i => {
                                                                            i.classList.remove('active');
                                                                            i.querySelector('.faq-answer').style.maxHeight = '0';
                                                                            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                                                                 });

                                                                 // Open clicked (if was closed)
                                                                 if (!isActive) {
                                                                            item.classList.add('active');
                                                                            answer.style.maxHeight = answer.scrollHeight + 'px';
                                                                            button.setAttribute('aria-expanded', 'true');
                                                                 }
                                   });
                            });


                            // ---- Scroll Animations ----
                            const observerOptions = {
                                   threshold: 0.15,
                                   rootMargin: '0px 0px -40px 0px'
                            };

                            const observer = new IntersectionObserver((entries) => {
                                   entries.forEach(entry => {
                                            if (entry.isIntersecting) {
                                                       entry.target.classList.add('visible');
                                                       observer.unobserve(entry.target);
                                            }
                                   });
                            }, observerOptions);

                            // Add animation classes to elements
                            const animateElements = [
                                   ...document.querySelectorAll('.cost-card'),
                                   ...document.querySelectorAll('.benefit-card'),
                                   ...document.querySelectorAll('.step'),
                                   ...document.querySelectorAll('.testimonial-card'),
                                   ...document.querySelectorAll('.faq-item'),
                                 ];

                            animateElements.forEach((el, i) => {
                                   el.classList.add('animate-on-scroll');
                                   el.style.transitionDelay = `${(i % 3) * 0.1}s`;
                                   observer.observe(el);
                            });


                            // ---- Cost bar animation on scroll ----
                            const costBars = document.querySelectorAll('.cost-bar-fill');
     const costObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                     if (entry.isIntersecting) {
                                entry.target.style.animation = 'fillBar 1.5s ease-out forwards';
                                costObserver.unobserve(entry.target);
                     }
            });
     }, { threshold: 0.5 });

                            costBars.forEach(bar => costObserver.observe(bar));


                            // ---- Smooth scroll for anchor links ----
                            document.querySelectorAll('a[href^="#"]').forEach(link => {
                                   link.addEventListener('click', (e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(link.getAttribute('href'));
                                            if (target) {
                                                       target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }
                                   });
                            });


                            // ---- Dynamic social proof (optional enhancement) ----
                            const recentNames = ['Maria aus München', 'Stefan aus Berlin', 'Anna aus Hamburg', 'Peter aus Köln', 'Lisa aus Frankfurt', 'Jan aus Düsseldorf', 'Sabine aus Stuttgart'];
     let proofIndex = 0;

                            function showSocialProof() {
                                   if (document.hidden) return;

       const notification = document.createElement('div');
                                   notification.style.cssText = `
                                         position: fixed;
                                               bottom: 80px;
                                                     left: 24px;
                                                           background: white;
                                                                 border-radius: 12px;
                                                                       padding: 14px 20px;
                                                                             box-shadow: 0 8px 32px rgba(0,0,0,.12);
                                                                                   font-size: .85rem;
                                                                                         z-index: 80;
                                                                                               display: flex;
                                                                                                     align-items: center;
                                                                                                           gap: 10px;
                                                                                                                 transform: translateX(-120%);
                                                                                                                       transition: transform .4s cubic-bezier(.4,0,.2,1);
                                                                                                                             max-width: 320px;
                                                                                                                                 `;

       notification.innerHTML = `
             <span style="font-size:1.2rem;">✅</span>
                   <span><strong>${recentNames[proofIndex]}</strong> hat gerade eine Beratung angefragt</span>
                       `;

       document.body.appendChild(notification);
                                   setTimeout(() => notification.style.transform = 'translateX(0)', 50);
                                   setTimeout(() => {
                                            notification.style.transform = 'translateX(-120%)';
                                            setTimeout(() => notification.remove(), 400);
                                   }, 4000);

       proofIndex = (proofIndex + 1) % recentNames.length;
                            }

                            // Show first proof after 8s, then every 25s
                            setTimeout(() => {
                                   showSocialProof();
                                   setInterval(showSocialProof, 25000);
                            }, 8000);


                            // ---- Phone number formatting ----
                            const telefonInput = document.getElementById('telefon');
     if (telefonInput) {
            telefonInput.addEventListener('input', (e) => {
                     // Only allow numbers, spaces, +, -, /
                                                e.target.value = e.target.value.replace(/[^0-9\s+\-\/]/g, '');
            });
     }

});
